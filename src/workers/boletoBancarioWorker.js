const utils = require('../utils');
const moment = require('moment');

module.exports = {
  getValorBoleto(linhaDigitavel) {
    const valorBoleto =
      utils.formatCurrency(
        parseFloat(`${linhaDigitavel.substring(37, 45)}.${linhaDigitavel.substring(45, 47)}`)
      );
    console.log(valorBoleto);
    return valorBoleto;
  },
  getCodigoDeBarras(linhaDigitavel) {
    /*
      01 a 03 03 9(3) Código do Banco na Câmara de Compensação = ‘001’
      04 a 04 01 9(1) Código da Moeda = '9'
      05 a 05 01 9(1) DV do Código de Barras (Anexo VI)
      06 a 09 04 9(04) Fator de Vencimento (Anexo IV)
      10 a 19 10 9(08) V(2) Valor
      20 a 25 06 9(6) Zeros
      26 a 42 17 9(17) Nosso Número, sem o DV
      26 a 32 9(7) Número do Convênio fornecido pelo Banco (CCCCCCC)
      33 a 42 9(10) Complemento do Nosso-Número, sem DV (NNNNNNNNNN)
      43 a 44 02 9(2) Tipo de Carteira/Modalidade de Cobrança
    */
    let codigoBarras = '';
    codigoBarras += linhaDigitavel.substring(0, 3);
    codigoBarras += linhaDigitavel.substring(3, 4);
    codigoBarras += linhaDigitavel.substring(32, 33);
    codigoBarras += linhaDigitavel.substring(33, 37);
    codigoBarras += linhaDigitavel.substring(37, 47);
    codigoBarras += linhaDigitavel.substring(4, 9);
    codigoBarras += linhaDigitavel.substring(10, 20);
    codigoBarras += linhaDigitavel.substring(21, 31);
    return codigoBarras;
  },
  getDataVencimento(linhaDigitavel) {
    const fatorDeVencimento = linhaDigitavel.substring(33, 37);
    const dataBase = moment([1997, 9, 7]);
    if (parseInt(fatorDeVencimento) === 0)
      return null;

    return dataBase.add(fatorDeVencimento, 'days');


  }
}
