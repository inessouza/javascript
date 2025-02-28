const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 5478

app.listen(PORT, function() {
    console.log(`Express rodando na porta ${PORT}`)
})

// body parser
app.use(bodyParser.urlencoded({ extend: false }))

//db connection
db.authenticate().then(() => {
    console.log("Banco de Dados Conectado.")
}).catch(e => {
    console.log("Erro ao conectar.", e)
})

// routes
app.get('/', (req, res) => {
    res.send("Funcionando.")
})

app.use('/jobs', require('./routes/jobs'))
