const express = require('express');
const services = require('./config/services');
const container = require('./container/cotainer')(services);

const app = express();
const port = 3000;

app.get('/', container.get('mainController'));
app.get('/users', container.get('listUsersController'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
