var express = require('express');
const cors = require('cors');

module.exports = () => {
    var app = express();

    app.use(cors({ origin: 'http://localhost:3000' }));
    app.use(express.json());

    return app;
};