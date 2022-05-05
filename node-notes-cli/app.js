const json = require('./data.json');

const { notes } = json;

const keyword = process.argv[2];

if (keyword === 'read') {
  for (const numb in notes) {
    console.log(`${numb}: ${notes[numb]}`);
  }
}
