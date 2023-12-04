const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const projects = require('../models/projects');
const data = require('./data');

async function updateproject(req, res) {
  const { name, start_date, end_date_string, description, id } = req.body;

  let image = '';

  if (req.file) {
    image = req.file.filename;
  }

  if (!image) {
    const query = `SELECT projects.id, projects.name, projects.start_date, projects.end_date_string, projects.description ,projects.technologies, projects.image, 
    users.name AS users, users.id AS usersId, projects."createdAt", projects."updatedAt" FROM projects LEFT JOIN users ON
    projects."userId" = users.id WHERE projects.id=${id}`;
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
    image = obj[0].image;
  }

  const user = req.session.users;

  const query = `UPDATE projects SET name='${name}', start_date='${start_date}', end_date_string='${end_date_string}', description='${description}', image='${image}' WHERE id=${id} AND "userId" = '${user.id}'`;
  const obj = await sequelize.query(query, { type: QueryTypes.UPDATE });

  console.log('update Data success= ', obj);
  
  // req.flash('success', 'Update Data Project!');

  res.redirect('/');
}

module.exports = updateproject;
