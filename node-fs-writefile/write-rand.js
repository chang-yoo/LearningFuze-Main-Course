const fs = require('fs');

const randomNumber = Math.random();
const data = String(randomNumber) + '\n';
fs.writeFile('random.txt', data, 'utf8', err => {
  if (err) throw err;
});
