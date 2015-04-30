#!/usr/bin/env node
var app = require('../src/app');

var server = app.listen(process.env.PORT || 3000, function(err) {
  if (err) { return console.log("Failed to start server: " +  err) }

  console.log("Server Started.")
});
