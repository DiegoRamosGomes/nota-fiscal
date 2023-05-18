export type InvoiceData = {
    DadosNota: {
        MunicipioPrestacao: number
        NaturezaOperacao: number
        IssRetido: string
        Atividade: {
            Codigo: number
            CodigoCnae: number
        }
        Prestador: {
            InscricaoMunicipal: number
        }
        Tomador: {
            TipoPessoa: string
            NrDocumento: string
            RazaoSocial: string
            Endereco: {
                Logradouro: string
                Numero: string
                Complemento: string
                Bairro: string
                Municipio: number
                Cep: number
            }
            Contato: {
                Telefone: string
                Email: string
            }
        }
        Rps: {
            Numero: number
            Serie: number
            Tipo: number
            DataEmissao: string
        }
        Servicos: {
            Unidade: number
            Quantidade: number
            Descricao: string
            ValorUnitario: number
        }[]
        Valores: {
            ValorServicos: number
            ValorDeducoes: number
            ValorOutrasDeducoes: number
            ValorPis: number
            ValorCofins: number
            ValorInss: number
            ValorIr: number
            ValorCsll: number
            OutrasRetencoes: number
            DescontoIncondicionado: number
            DescontoCondicionado: number
            BaseCalculo: number
            Aliquota: number
            ValorIss: number
            ValorCredito: number
            ValorTotalNota: number
        }
    }
}