var app = require('./config/custom-express')();
const routes = require('./routes');

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});