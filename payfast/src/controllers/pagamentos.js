const connectionFactory = require('../dao/connectionFactory');
const PagamentoDAO = require('../dao/pagamentoDAO');

const pagamentos = {
    async index(request, response) {
        return response.send('OK');
    },
    async store(request, response) {
        var pagamento = req.body;

        req.assert("forma_de_pagamento", "Forma de pagamento é obrigatória.").notEmpty();
        req.assert("valor", "Valor é obrigatório e deve ser um decimal.").notEmpty().isFloat();
        req.assert("moeda", "Moeda é obrigatória e deve ter 3 caracteres").notEmpty().len(3, 3);

        var errors = req.validationErrors();

        if (errors) {
            console.log("Erros de validação encontrados");
            res.status(400).send(errors);
            return;
        }

        console.log('Processando pagamento...');

        var connection = connectionFactory();
        var _dao = PagamentoDAO(connection);

        _dao.salva(pagamento, (erro, result) => {
            console.log('pagamento criado: ' + result);

            res.location('/pagamentos/pagamento/' + result.insertId);

            pagamento.id = result.insertId;

            res.status(201).json(pagamento);
        });
    }
}

module.exports = pagamentos;