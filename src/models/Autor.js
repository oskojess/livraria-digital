const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutorSchema = new Schema({
  nome: {
    type: String, 
    required: true
  },
  biografia: {
    type: String,
    required: true
  },
}, { timestamps: true});

const Autor = mongoose.model('Autor', AutorSchema);

module.exports = Autor;