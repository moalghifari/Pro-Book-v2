require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const transfer = require('./modules/transfer');
const validate = require('./modules/validate');

const app = express();
const port = 3000;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

app.use(bodyParser.json());

// APIs Goes Here
app.get('/', (req, res) => {
  res.send('This is Pro-Book Bank-WebService');
});

app.get('/validate-card', validate);
app.post('/transfer', transfer);

app.listen(port);

console.log('Listening on port', port);
