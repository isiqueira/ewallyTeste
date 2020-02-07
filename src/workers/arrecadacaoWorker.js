/*
  Parametros
*/
const utils = require('../utils');
const moment = require('moment');

module.exports = {
  getValorBoleto(linhaDigitavel) {
    const codBarras = this.getCodigoDeBarras(linhaDigitavel);
    const valorBoleto = codBarras.substring(4, 15);
    return utils.formatCurrency(
      parseFloat(`${valorBoleto.substring(0, 9)}.${valorBoleto.substring(9, 13)}`)
    );
  },
  getCodigoDeBarras(linhaDigitavel) {
    let codigoBarras = '';
    for (let index = 0; index < 4; index++) {
      const start = (11 * (index)) + index;
      const end = (11 * (index + 1)) + index;
      codigoBarras += linhaDigitavel.substring(start, end);
    }
    return codigoBarras;
  },
  getDataVencimento(linhaDigitavel) {

    const codBarras = this.getCodigoDeBarras(linhaDigitavel);
    const _m = codBarras.substring(23, 31);
    const formattedDate = moment([
      _m.substring(4, 8),
      _m.substring(2, 4) - 1,
      _m.substring(0, 2)
    ]);


    //console.log(formattedDate);

    if (formattedDate.isValid())
      return formattedDate;
    return null;

  },
  isValid(linhaDigitavel) {
    //TODO implementar
  }
}
