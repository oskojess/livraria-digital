const express = require("express");
const router = express.Router();

const livroController = require('../controllers/livro');

/**
@route GET 
@desc Retornar todos os livros
@access Public 
@endpoint http://localhost:porta/api/livro
**/
router.get('/', livroController.getAll);
router.post('/', livroController.addLivro);
router.put('/editar/:id', livroController.atualizarTitulo);
router.patch('/emprestimo/:id', livroController.emprestarLivro);


module.exports = router;