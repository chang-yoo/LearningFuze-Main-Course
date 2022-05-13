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
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An unexpected error occured.' });
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
  const sql = `
    insert into "grades" ("name", "course", "score")
                  values ('${names}', '${courses}', '${scores}')
                  returning*
  `;
  db
    .query(sql)
    .then(result => {
      res.status(201).send(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An unexpected error occured and failed to pull data from database' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening port at 3000!');
});
