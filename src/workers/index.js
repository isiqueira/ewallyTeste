const arrecadacaoWorker = require('./arrecadacaoWorker');
const boletoBancarioWorker = require('./boletoBancarioWorker');
module.exports = {
  getValorBoleto(linhaDigitavel) {

    if (Number(linhaDigitavel[0]) === 8)
      return arrecadacaoWorker.getValorBoleto(linhaDigitavel);

    return boletoBancarioWorker.getValorBoleto(linhaDigitavel);
  },
  getCodigoDeBarras(linhaDigitavel) {
    if (Number(linhaDigitavel[0]) === 8)
      return arrecadacaoWorker.getCodigoDeBarras(linhaDigitavel);

    return boletoBancarioWorker.getCodigoDeBarras(linhaDigitavel);
  },
  getDataVencimento(linhaDigitavel) {
    if (Number(linhaDigitavel[0]) === 8)
      return arrecadacaoWorker.getDataVencimento(linhaDigitavel);

    return boletoBancarioWorker.getDataVencimento(linhaDigitavel);
  }
}
