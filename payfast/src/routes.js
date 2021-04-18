const { Router } = require('express');
const pagamentos = require('./controllers/pagamentos');

const routes = Router();

routes.get('/pagamentos', pagamentos.index);
routes.post('/pagamentos', pagamentos.store);

module.exports = routes;