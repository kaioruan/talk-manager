const express = require('express');
const bodyParser = require('body-parser');
// const Talker = require('./Middlewares/Talker');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint,  para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (_req, res) => {
  const response = fs.readFileSync('talker.json', 'utf8');
  const result = JSON.parse(response);
  res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log('Online');
});
