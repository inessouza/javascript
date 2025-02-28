const express = require('express')
const router = express.Router()
const Job = require('../models/Job')

// rota teste
router.get('/test', (req, res) => {
    res.send('ok')
})

// rota para adicionar dados
router.post('/add', (req, res) => {
    let { title, salary, company, email, new_job } = req.body
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    }).then(() => res.redirect('/')
    .catch(e => console.log(e)))
})

module.exports = router
