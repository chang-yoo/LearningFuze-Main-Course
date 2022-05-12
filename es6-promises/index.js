const takeAChance = require('./take-a-chance');

const promise = takeAChance('changhyun');

promise
  .then(val => {
    console.log(val);
  })
  .catch(error => {
    console.log(error.message);
  });
