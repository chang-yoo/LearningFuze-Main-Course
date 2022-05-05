const json = require('./data.json');
const fs = require('fs');
const { nextId, notes } = json;

const keyword = process.argv[2];

if (keyword === 'read') {
  for (const numb in notes) {
    console.log(`${numb}: ${notes[numb]}`);
  }
}

if (keyword === 'create') {
  json.notes[nextId] = process.argv[3];
  json.nextId++;
  const stringjson = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', stringjson, 'utf8', err => {
    if (err) {
      console.err(err);
      process.exit(1);
    }
  });
}

if (keyword === 'delete') {
  const id = process.argv[3];
  delete notes[id];
  const stringjson = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', stringjson, 'utf8', err => {
    if (err) {
      console.err(err);
      process.exit(1);
    }
  });
}

if (keyword === 'update') {
  const id = process.argv[3];
  const updated = process.argv[4];
  notes[id] = updated;
  const stringjson = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', stringjson, 'utf8', err => {
    if (err) {
      console.err(err);
      process.exit(1);
    }
  });
}
