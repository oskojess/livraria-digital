const express = require("express");
const autor = require("../controllers/autor");
const router = express.Router();
const autorController = require('../controllers/autor');

router.get('/', autorController.getAll);
router.post('/', autorController.addAutor);
router.put('/editar/:id', autorController.atualizarAutor);
router.patch('/editar/:id', autorController.atualizarNome);
router.delete('/:id', autorController.deletarAutor);

module.exports = router;
