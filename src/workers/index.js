const arrecadacaoWorker = require('./arrecadacaoWorker');
const boletoBancarioWorker = require('./boletoBancarioWorker');
module.exports = {
  getValorBoleto(linhaDigitavel) {

    if (parseInt(linhaDigitavel[0]) === 8)
      return arrecadacaoWorker.getValorBoleto(linhaDigitavel);

    return boletoBancarioWorker.getValorBoleto(linhaDigitavel);
  },
  getCodigoDeBarras(linhaDigitavel) {
    if (parseInt(linhaDigitavel[0]) === 8)
      return arrecadacaoWorker.getCodigoDeBarras(linhaDigitavel);

    return boletoBancarioWorker.getCodigoDeBarras(linhaDigitavel);
  },
  getDataVencimento(linhaDigitavel) {
    if (parseInt(linhaDigitavel[0]) === 8)
      return arrecadacaoWorker.getDataVencimento(linhaDigitavel);

    return boletoBancarioWorker.getDataVencimento(linhaDigitavel);
  },
  isValid(linhaDigitavel) {
    if (parseInt(linhaDigitavel[0]) === 8)
      return arrecadacaoWorker.isValid(linhaDigitavel);

    return boletoBancarioWorker.isValid(linhaDigitavel);
  }
}
