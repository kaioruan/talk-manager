const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const generateToken = require('./Middlewares/generateToken');
const { emailValidation, passwordValidation,
  tokenValidation, nameAgeValidation,
  talkValidation, rateValidation } = require('./Middlewares/LoginValidation');
const newTalker = require('./services/newTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint,  para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/search', tokenValidation, (req, res) => {
  const { q } = req.query;
  const response = fs.readFileSync('talker.json', 'utf8');
  const result = JSON.parse(response);
  const filteredTalker = result.filter((r) => r.name.includes(q));
  res.status(200).json(filteredTalker);
});

app.get('/talker', (_req, res) => {
  const response = fs.readFileSync('talker.json', 'utf8');
  const result = JSON.parse(response);
  res.status(200).json(result);
});

app.get('/talker/:id', (req, res) => {
  const { id } = req.params;
  const response = fs.readFileSync('talker.json', 'utf8');
  const result = JSON.parse(response);
  const talkerId = result.find((r) => r.id === Number(id));
  if (!talkerId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talkerId);
});
app.post('/login', emailValidation, passwordValidation, generateToken);

app.post('/talker', tokenValidation, nameAgeValidation, talkValidation, rateValidation, newTalker);

app.delete('/talker/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  const response = fs.readFileSync('talker.json', 'utf8');
  const result = JSON.parse(response);
  const newResult = result.filter((r) => r.id !== Number(id));
  fs.writeFileSync('./talker.json', JSON.stringify(newResult));

  res.status(204).send('');
});

app.listen(PORT, () => {
  console.log('Online');
});
