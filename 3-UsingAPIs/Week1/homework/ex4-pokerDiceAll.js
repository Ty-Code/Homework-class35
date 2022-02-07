const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  return new Promise((resolve) => {
    const dice = [1, 2, 3, 4, 5];
    const promises = dice.map((die) => rollDie(die));

    resolve(Promise.all(promises));
  });
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
