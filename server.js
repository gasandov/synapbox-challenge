const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({
  path: '.env'
});

const apiRouter = require('./routes/api');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.info(`Server running on port: ${PORT}`);
});
