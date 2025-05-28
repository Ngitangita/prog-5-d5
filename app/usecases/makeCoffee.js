const { checkStock, useIngredients } = require('../business/stockService');
const { prepareCoffee } = require('../business/coffeeService');
const { PaymentError } = require('../errors/customErrors');

function makeCoffee(type, options) {
  if (!checkStock(type)) {
    throw new Error(`Stock insuffisant pour ${type}`);
  }

  const paymentSuccess = true;
  if (!paymentSuccess) {
    throw new PaymentError('Le paiement a échoué.');
  }

  useIngredients(type);
  prepareCoffee(type, options);
  console.log(`Votre ${type} est prêt`);
}

module.exports = { makeCoffee };
