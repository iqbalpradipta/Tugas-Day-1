const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

async function deleteList(req, res) {
  const { id } = req.params;

  const query = `DELETE FROM projects WHERE id='${id}'`;

  const obj = await sequelize.query(query, { type: QueryTypes.DELETE });

  req.flash('success', 'Delete Project Success!');

  res.redirect('/');
}

module.exports = deleteList;
