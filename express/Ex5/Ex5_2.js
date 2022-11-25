const express = require('express')
const server = express()
const router = require('./Ex5.js')

server.use('/api', router)

server.listen(3000, () => console.log('rodando...'))