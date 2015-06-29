#!/usr/bin/env node
var Hapi = require('hapi');

var registered = require('../src/app/registered');

var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 });

server.register(registered, function(err) {
  if (err) { console.error('Failed to load a plugin:', err); }
});

server.start(function(err) {
  if (err) { return console.log("Failed to start server: " +  err); }

  console.log("Server Started.");
});
