const Sequelize = require('sequelize')
const db = require('../db/connection')

const Job = db.define('job', {
    title: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    new: {
        type: Sequelize.INTEGER
    },
    created_at: {
        type: Sequelize.STRING
    },
    updated_at: {
        type: Sequelize.STRING
    }
})

module.exports = Job
