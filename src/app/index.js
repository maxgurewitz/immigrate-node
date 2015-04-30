var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var ejs = require('ejs');

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('./dist', { index: false }));

app.get('/', function (req, res) {
  res.render('home');
});

module.exports = app;
