const utils = require('../utils');
const { boleto } = require('boleto-brasileiro-validator');
const worker = require('../workers');

module.exports = {
  async store(request, response) {
    const { linhaDigitavel } = request.body;
    /*
      Se a linha digitada é válida
      O valor do boleto, se existir
      A data de vencimento do boleto, se existir
      Os 44 dígitos correspondentes ao código de barras desse boleto
    */
    //limpando dados (pontos, espacos e hifens)
    const sanitizedLinhaDigitavel = utils.sanitizeBoleto(linhaDigitavel);
    //Usando pacote npm pra validar o boleto
    const linhaDigitavelValida = boleto(sanitizedLinhaDigitavel, true);

    const valor = worker.getValorBoleto(sanitizedLinhaDigitavel);
    const dataVencimento = worker.getDataVencimento(sanitizedLinhaDigitavel);
    const codigoBarras = worker.getCodigoDeBarras(sanitizedLinhaDigitavel);

    response.status(200).send({
      linhaDigitavelValida,
      valor,
      dataVencimento,
      codigoBarras
    });
  },
}
