import axios from "axios";

export async function handleSendErrorToWhatsapp(errors: string | string[]): Promise<void> {
    if (typeof errors !== 'string') {
        let errorMessage = "Não foi possivel enviar a nota fiscal pela API pelos seguintes erros: %0A%0A"
        errors.forEach((e: string) => errorMessage = errorMessage + e + '%0A')
        await handleRequestToCallMeBot(errorMessage)
        return
    }

    await handleRequestToCallMeBot(errors)
}

export async function handleSendSuccessToWhatsapp(): Promise<void> {
    await handleRequestToCallMeBot("Nota fiscal enviada com sucesso para petaxxon")
}

async function handleRequestToCallMeBot(message: string): Promise<void> {
    const API_KEY = process.env.CALLMEBOT_KEY as string
    const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER as string


    try {
        await axios.get(`https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_NUMBER}&text=${message}&apikey=${API_KEY}`)
    } catch (e) {
        throw e
    }
}