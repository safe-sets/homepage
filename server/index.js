const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3004;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}`);
});