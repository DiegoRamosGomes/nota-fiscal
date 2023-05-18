import axios from "axios"
import {handleSendErrorToWhatsapp, handleSendSuccessToWhatsapp} from "./WhatsAppService"
import {InvoiceData} from "../types/invoice"

async function handleRequestToGenerateInvoice(invoiceData: InvoiceData): Promise<void> {
    const API_URL: string = process.env.PM_API_URL as string
    const SECURITY_KEY: string = process.env.PM_SECURITY_KEY as string

    try {
        await axios.post(`${API_URL}/gerar`, invoiceData, {
            headers: {'Authorization': SECURITY_KEY}
        })
    } catch (e) {
        throw e
    }
}

async function handleErrorOnGenerateInvoice(error: unknown): Promise<void> {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const errors = error.response.data?.Message?.DetailError
            if (errors) {
                await handleSendErrorToWhatsapp(errors)
                return
            }
        }
    }
    await handleSendErrorToWhatsapp('Não foi possivel recuperar o erro na resposta da api')
}

export async function sendInvoice(invoiceData: InvoiceData): Promise<true | false> {
    try {
        await handleRequestToGenerateInvoice(invoiceData)
        await handleSendSuccessToWhatsapp()
        return true
    } catch (error) {
        await handleErrorOnGenerateInvoice(error)
        return false
    }
}