var Router = require('express').Router;
var baseRouter = Router();
var apiRouter = Router();
var BASE = require(__BASE + '/base');

// API

var users = BASE.controllers.users;
apiRouter.post('/users', users.create);
apiRouter.get('/user/:id', users.get);

baseRouter.use('/api', apiRouter);

// VIEWS

var views = BASE.controllers.views;
baseRouter.get('*', views.home);

module.exports = baseRouter;
