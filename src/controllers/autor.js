const { request, response }  = require('express');
const mongoose = require('mongoose');
const Autor = require('../models/Autor');

const getAll = (request, response, next)=>{
  Autor.find()
      .then((autor) => {
          response.status(200).json(autor);
      })
      .catch(err => next(err));
}

const addAutor = (request, response, next)=>{
  let { nome, biografia } = request.body

  const newAutor = new Autor({
      nome,
      biografia,
    });
    newAutor.save()
      .then((res) => {
          response.status(201).send({ mensagem: `${newAutor.nome} foi criado com sucesso.  `});
      })
      .catch(err => next(err));

    }

const atualizarAutor = (request, response) =>{
  const { id } = request.params //pega o ID na URL

  if (!mongoose.Types.ObjectId.isValid(id)) {
      response.status(400).json({ message: 'ID inválido' });
      return;
  }
  
  Autor.findByIdAndUpdate(id, request.body)
      .then(() => {
          response.status(200).json({ message: ` ${request.params.id} foi atualizado com sucesso.` });
      })
      .catch((err) => {
          response.json(err);
      });
 
}

const atualizarNome = (request, response)=>{
  const { id } = request.params //pegando o valor do ID mandado na URL
  const { nome } = request.body 

  Autor.findByIdAndUpdate(id, { $set: { nome }})
      .then((autor) => {
          response.status(200).json({ message: `${request.params.id} alterado.`});                               
      })
      .catch((err) => {
          response.json(err);
      });

}

const deletarAutor = (request, response)=>{
  const { id } = request.params
  
  Autor.findByIdAndDelete(id)
      .then((autor) => {
          response.status(200).json(' Deletado com sucesso');
      })
      .catch((err) => {
          throw new Error(err);
      });
}

module.exports ={
  getAll,
  addAutor,
  atualizarAutor,
  atualizarNome,
  deletarAutor
}