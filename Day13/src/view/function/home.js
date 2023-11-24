const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models');
const data = require('./data');
async function home(req, res) {
  const query = 'SELECT * FROM projects'
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT })
  console.log('ini dari db: ', obj)

  res.render('index',  { data: obj });
}

module.exports = home;
