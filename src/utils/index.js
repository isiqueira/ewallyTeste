const _currency = { style: 'currency', currency: 'BRL' };

module.exports = {

  sanitizeBoleto(dataValue) {
    return dataValue.replace(/( |\.|-)/g, '');
  },
  formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', _currency).format(value);
  }

}
