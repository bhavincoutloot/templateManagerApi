'use strict';

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname+"/public"));
var db = require('./database/mongoConnect');

var routes = require('./app/routes');
routes(app);

app.listen(port, function() {
  console.log("Server started on " + port);
});
