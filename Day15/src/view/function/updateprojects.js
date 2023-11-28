const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models');
const data = require('./data');

async function updateprojects(req, res) {
    const { id } = req.params

    const query = `SELECT * FROM projects WHERE id=${id}`
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT })

    console.log("update blog view", obj)

    res.render('updateproject', { data: obj[0] })
}

module.exports = updateprojects;