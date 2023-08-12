var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Lista todas as tarefas: ');
});

router.post('/', function (req, res, next) {
    res.send('Cadastra tarefas: ');
});

router.put('/:id', function (req, res, next) {
    res.send('Atualiza um registro: ');
});

router.delete('/:id', function (req, res, next) {
    res.send('Deleta um registro: ');
});

router.get('/:id', function (req, res, next) {
    res.send('Lista o registro especifico na tabela: ');
});

module.exports = router;
