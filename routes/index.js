const routes = require('express').Router();
const userController = require('../controllers/contacts');

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);
routes.get('/:id', userController.getSingle);

routes.post('/contact', userController.createContact);
routes.put('/:id', userController.updateContact);
routes.delete('/:id', userController.deleteContact);

module.exports = routes;
