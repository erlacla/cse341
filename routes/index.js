const routes = require('express').Router();
const userController = require('../controllers/contacts');

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);
routes.get('/:id', userController.getSingle);

module.exports = routes;