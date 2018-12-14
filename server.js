const express = require('express');
const container = require('./container/cotainer');

const app = express();
const port = 3000;

app.get('/', container.mainController);
app.get('/users', container.listUsersController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
