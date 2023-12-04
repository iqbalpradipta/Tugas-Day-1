const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

async function deleteList(req, res) {
  const { id } = req.params;
  const user = req.session.users;

  const query = `DELETE FROM projects WHERE id='${id}' AND "userId" = '${user.id}'`;

  const obj = await sequelize.query(query, { type: QueryTypes.DELETE });
  console.log('delete data', obj);

  // req.flash('success', 'Delete Project Success!');

  res.redirect('/');
}

module.exports = deleteList;
