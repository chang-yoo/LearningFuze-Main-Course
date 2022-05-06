const express = require('express');
const app = express();

app.use((req, res) => {
  // console.log(req.method);
  res.send('hihihihi');
});

app.listen(3000, () => {
  // console.log('express server listening on port 3000');
});
