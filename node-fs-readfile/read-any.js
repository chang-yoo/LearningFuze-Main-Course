
const fs = require('fs');
const [, , files] = process.argv;

fs.readFile(files, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else if (files === 'hopper.txt') {
    console.log(data);
  } else if (files === 'hipster-ipsum.txt') {
    console.log(data);
  } else if (files === 'dijkstra.txt') {
    console.log(data);
  } else if (files === 'cunningham.txt') {
    console.log(data);
  } else if (files === 'read-dijkstra.js') {
    console.log(data);
  }
});
