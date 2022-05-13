const express = require('express');
const app = express();

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
  from "grades"
    `;
  db
    .query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const names = req.body.name;
  const courses = req.body.course;
  const scores = req.body.score;
  if (names === undefined || courses === undefined || scores === undefined || scores < 0 || scores > 100) {
    res.status(400).json({ error: 'name, course, and score cannot be left as empty AND score need to be an integer from 0 to 100' });
    return;
  }
  const sql = 'INSERT INTO grades(name, course, score) VALUES ($1, $2, $3) RETURNING*';
  const values = [names, courses, scores];
  db
    .query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured and failed to pull data from database' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const beforeId = req.params.gradeId;
  const id = Number(beforeId);
  const body = req.body;
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'An invalid gradeId' });
  } else if (body.name === undefined || body.course === undefined || body.score === undefined) {
    res.status(400).json({ error: 'Missing name, course, or score' });
  } else {
    const sql = `update "grades"
        set name = $1,
            course = $2,
            score = $3
            where "gradeId" = $4
            returning*
            `;
    const params = [body.name, body.course, body.score, id];
    db
      .query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (grade) {
          res.status(200).json(grade);
        } else {
          res.status(404).json({ error: `Cannot find grade with gradeId of ${id}` });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured and failed to pull data from database' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'An invalid gradeId' });
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning*;
  `;
  const params = [id];
  db
    .query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (grade) {
        res.status(200).json(grade);
      } else {
        res.status(404).json({ error: `Cannot find grade with gradeId of ${id}` });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured and failed to pull data from database' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening port at 3000!');
});
