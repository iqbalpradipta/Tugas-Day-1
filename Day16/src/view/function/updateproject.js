const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models');
const data = require('./data');

async function updateproject(req, res) {
  const { name, start_date, end_date_string, description, id } = req.body

  const query = `UPDATE projects SET name='${name}', start_date='${start_date}', end_date_string='${end_date_string}', description='${description}' WHERE id=${id}`
  const obj = await sequelize.query(query, { type: QueryTypes.UPDATE })

  console.log('update Data success= ', obj)

  res.redirect('/');
}

module.exports = updateproject;
