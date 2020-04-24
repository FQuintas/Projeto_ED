const express = require('express');

const autorController = require('./controllers/autorController');
const livroController = require('./controllers/livroController');

const routes = express.Router();

routes.post('/autor', autorController.create);
routes.get('/autor', autorController.index);
routes.delete('/autor/:id', autorController.delete);

routes.post('/livro', livroController.create);
routes.get('/livro', livroController.index);
routes.delete('/livro/:id', livroController.delete);

module.exports = routes;