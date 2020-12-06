const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
/**
 * * Carregar variaveis do arquivo .env file, onde chaves de API e senhas são configuradas
 */

dotenv.config()

const PORT = process.env.PORT || 5000;

 const autor = require('./src/routes/autor');
 const livro = require('./src/routes/livro');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

 app.use('/api/autor', autor)
 app.use('/api/livro', livro)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Server Error')
})

app.listen(PORT, () => {
  console.log('Está rodando')
})

module.exports = app