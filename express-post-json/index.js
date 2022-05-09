const express = require('express');

const app = express();

const grades = {};

let nextId = 1;

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const prop in grades) {
    arr.push(grades[prop]);
  }
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.nextId = nextId;
  grades.prop = req.body;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // console.log('listening');
});
