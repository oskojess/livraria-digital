const { request, response } = require("express");
const Livro = require('../models/Livro');

const getAll = ((request, response, next) => {
  Livro.find()
  .then((livro) => {
    response.status(200).json(livro)
  })
  .catch((error) => next(error));
})

const addLivro = ((request, response, next) => {
  const { autorId, titulo, emprestimo } = request.body;

  const newLivro = new Livro({
    autorId,
    titulo,
    emprestimo
  })
  newLivro.save()
    .then((livro) => {
      response.status(201).json(`Livro ${newLivro.titulo} foi criado com sucesso`)
    })
    .catch((error) => next(error))
});

const atualizarTitulo = ((request, response, next) => {
  const { id } = request.params; 

  Livro.findOneAndUpdate(id, request.body)
  .then((livro) => {
    response.status(200).json({ mensagem: `Alterado com sucesso!`})
  })
  .catch((error) => next(error))
})

const deletarLivro = (request, response)=>{
  const { id } = request.params
  
  Livro.findByIdAndDelete(id)
      .then(() => {
          response.status(200).json('Deletado com sucesso!');
      })
      .catch((err) => {
          throw new Error(err);
      });
}

const emprestarLivro = (request, response)=>{
  const { id } = request.params
  const { emprestimo } = request.body

  Livro.findByIdAndUpdate(id, { $set: { emprestimo }})
      .then((livro) => {
          response.status(200).json({ message: `Alterado com sucesso`});                               
      })
      .catch((err) => {
          response.json(err);
      });
}

module.exports = {
  getAll,
  addLivro,
  atualizarTitulo,
  emprestarLivro,
  deletarLivro
}