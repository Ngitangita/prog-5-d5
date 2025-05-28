const { makeCoffee } = require('../usecases/makeCoffee');

function run({ type, options }) {
  try {
    makeCoffee(type, options);
  } catch (err) {
    console.error('Erreur :', err.message);
  }
}

module.exports = { run };
