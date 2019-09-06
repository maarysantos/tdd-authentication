const routes = require ('express').Router();
const { User } = require('./app/models');

const sessionController = require('./app/controllers/sessionController');

routes.post('/sessions', sessionController.store);

module.exports = routes;
