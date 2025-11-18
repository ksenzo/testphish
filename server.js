const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userData = require('./userData');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Приём данных с формы
app.post('/submit-form', (req, res) => {
  userData.set(req.body); // сохраняем данные в модуле
  console.log('Данные пользователя сохранены:', userData.get());
  res.send({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
