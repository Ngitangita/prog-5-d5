const readline = require('readline-sync');
const coffeeController = require('./app/controllers/coffeeController');

function main() {
  console.log('Bienvenue à la machine à café \n');

  const type = readline.question('Quel type de café voulez-vous ? ');
  const sugar = parseInt(readline.question('Combien de sucres ? (0-5) : '), 10);
  const milkAnswer = readline.question('Voulez-vous du lait ? (oui/non) : ');
  const milk = milkAnswer.toLowerCase() === 'oui';

  coffeeController.run({ type, options: { sugar, milk } });
}

main();
