const routes = require('express').Router();
const controller = require('../controllers/index');

routes.get('/', controller.route);

module.exports = routes;