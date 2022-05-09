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

app.get('/api/notes/:id', (req, res) => {
  const beforeId = req.params.id;
  const id = parseInt(beforeId);
  if (id < 0 || isNaN(id) || !Number.isInteger(id)) {
    res.status(400).send('id must be a positive integer!');
  } else if (notes[id] !== undefined) {
    res.status(200).send(notes[id]);
  } else {
    res.status(404).send('error: cannot find note with id: ' + id);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on the port 3000');
});
