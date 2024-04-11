//importando as bibliotecas
const express = require('express');
const animaisRouter = require('./routes/animais')

const app = express()

app.use(express.json())

app.use('/animais', animaisRouter)

// Conexão ao banco de dados
app.listen(3333,
     () => console.log('⚡Servidor ligado http://:localhost:3333⚡'))