function prepareCoffee(type, options) {
  console.log(`Préparation de ${type} avec ${options.sugar} sucres et lait : ${options.milk ? 'oui' : 'non'}`);
}

module.exports = { prepareCoffee };
