const routes = require ('express').Router();
const { User } = require('./app/models');

const authMiddleware = require('../src/middleware/auth');

const sessionController = require('./app/controllers/sessionController');

routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req, res)=>{
    return res.status(200).send();
});

module.exports = routes;
