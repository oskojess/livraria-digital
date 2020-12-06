const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LivroSchema =  new Schema({
  autorId: {
    type: Schema.Types.ObjectId, 
    ref: 'Autor',
    required: true
  },
  titulo:{ 
    type: String, 
    required: true
  }, 
  emprestimo:{
    type: Boolean, 
    default: false,
    required: true
  },
}, { timestamps: true });

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;