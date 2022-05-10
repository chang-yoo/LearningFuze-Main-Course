const express = require('express');
const fs = require('fs');

const app = express();
const json = require('./data.json');
const { nextId, notes } = json;

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

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const body = req.body;
  if (body.content === undefined) {
    res.status(400).send('error: content is a required field');
  } else if (body.content !== undefined) {
    body.id = nextId;
    json.nextId++;
    json.notes[nextId] = body;
    const stringjson = JSON.stringify(json, null, 2);
    fs.writeFile('data.json', stringjson, 'utf8', err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        res.status(500).send('error: An unexpected error occurred.');
      } else {
        res.status(201).send(body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const beforeId = req.params.id;
  const ids = parseInt(beforeId);
  if (ids < 0 || isNaN(ids) || !Number.isInteger(ids)) {
    res.status(400).send('error: id must be a positive integer');
  } else if (String(notes[ids]) === undefined) {
    res.status(404).send('error: cannot find note with id ' + ids);
  } else {
    delete notes[ids];
    res.sendStatus(204);
    const stringjson = JSON.stringify(json, null, 2);
    fs.writeFile('data.json', stringjson, err => {
      if (err) {
        console.error(err);
        res.status(500).send('error: An unexpected error occurred.');
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const beforeId = req.params.id;
  const id = parseInt(beforeId);
  if (id < 0 || !Number.isInteger(id) || isNaN(id)) {
    res.status(400).send('id must be a positive integer');
  } else if (req.body.content === undefined) {
    res.status(400).send('error: content is a required feild');
  } else if (notes[id] === undefined && req.body.content !== undefined) {
    res.status(404).send('error: cannot find note with id ' + id);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on the port 3000');
});
