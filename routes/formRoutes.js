const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

router.post('/submit', formController.handleForm);

module.exports = router;