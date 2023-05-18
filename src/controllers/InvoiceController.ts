import {Request, Response} from "express";
import {sendInvoice} from "../services/PrefeituraModernaService";
import {formatCurrentDate, getCurrentMonth} from "../helpers";
import {InvoiceData} from "../types/invoice";

export async function generateNewInvoice(req: Request, res: Response): Promise<Response> {

    const currentMonth = getCurrentMonth()
    const currentSalary = parseInt(process.env.PETAXXON_SALARY as string)

    const invoiceData: InvoiceData = {
        DadosNota: {
            MunicipioPrestacao: 4218707,
            NaturezaOperacao: 3,
            IssRetido: 'N',
            Atividade: {
                Codigo: 1402,
                CodigoCnae: 9511800,
            },
            Prestador: {
                InscricaoMunicipal: 80744
            },
            Tomador: {
                TipoPessoa: 'J',
                NrDocumento: '04617572000175',
                RazaoSocial: 'Petaxxon Informática Ltda',
                Endereco: {
                    Logradouro: "Rua professor monken",
                    Numero: "72",
                    Complemento: "",
                    Bairro: "Mosela",
                    Municipio: 3303906,
                    Cep: 25665006
                },
                Contato: {
                    Telefone: "",
                    Email: "notasfiscaispetaxxon@gmail.com"
                }
            },
            Rps: {
                Numero: 1,
                Serie: 1,
                Tipo: 1,
                DataEmissao: formatCurrentDate()
            },
            Servicos: [
                {
                    Unidade: 1,
                    Quantidade: 1,
                    Descricao: `Serviços prestados no mes de ${currentMonth}`,
                    ValorUnitario: currentSalary
                }
            ],
            Valores: {
                ValorServicos: currentSalary,
                ValorDeducoes: 0,
                ValorOutrasDeducoes: 0,
                ValorPis: 0,
                ValorCofins: 0,
                ValorInss: 0,
                ValorIr: 0,
                ValorCsll: 0,
                OutrasRetencoes: 0,
                DescontoIncondicionado: 0,
                DescontoCondicionado: 0,
                BaseCalculo: currentSalary,
                Aliquota: 0,
                ValorIss: 0,
                ValorCredito: 0,
                ValorTotalNota: currentSalary
            }
        }
    }

    const invoiceWasCreated = await sendInvoice(invoiceData)

    return res.json({ok: invoiceWasCreated})
}
