const express = require('express');

const autorController = require('./controllers/autorController');

const routes = express.Router();

routes.post('/autor', autorController.create);
routes.get('/autor', autorController.index);
routes.delete('/autor/:id', autorController.delete);

module.exports = routes;