
const fs = require('fs');
const files = process.argv[2];

fs.readFile(files, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
