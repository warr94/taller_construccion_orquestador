const bodyParser = require('body-parser')
const express = require('express');
const routes = require('./routers')
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use('/', routes);

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
