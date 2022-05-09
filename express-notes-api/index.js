const express = require('express');
// const fs = require('fs');

const app = express();
const json = require('./data.json');
const { notes } = json;

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const prop in notes) {
    arr.push(notes[prop]);
  }
  res.status(200).json(arr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on the port 3000');
});
