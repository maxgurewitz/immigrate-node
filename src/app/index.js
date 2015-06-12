var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var ejs = require('ejs');

GLOBAL.__BASE = __dirname;

var routes = require('./routes');


app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('./dist', { index: false }));
app.use(routes);

module.exports = app;
