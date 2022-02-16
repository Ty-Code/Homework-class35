const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  
    const dice = [1, 2, 3, 4, 5];
    const promises = dice.map((die) => rollDie(die));

    return Promise.all(promises);

}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

//? Promise.all() runs the promises independently that's why in the case of a rejected promise, dice that have not yet finished their roll continue to do so.  

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
