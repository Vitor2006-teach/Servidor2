
const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtosController');
const validateProduto = require('../middlewares/validateProduto');

router.get('/', controller.listar);

router.post('/', validateProduto, controller.criar);

router.get('/:id', controller.buscarPorId);

router.delete('/:id', controller.remover);

module.exports = router;
 