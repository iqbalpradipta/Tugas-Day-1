const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models');

async function PostMyproject(req, res) {
  const { name, start_date, end_date_string, description } = req.body;
  const image = req.file.filename;
  const userId = req.session.users.id;
  const technologies = '{nextJS, reactJS, typescript}';
  const query = `INSERT INTO projects(name, start_date, end_date_string, description, technologies, image, "userId") VALUES('${name}', '${start_date}', '${end_date_string}', '${description}', '${technologies}', '${image}', '${userId}') `;

  const obj = await sequelize.query(query, { type: QueryTypes.INSERT });

  console.log('Data Insert Successfuly= ', obj);
  req.flash('success', 'Success Insert Project!');

  res.redirect('/');
}

module.exports = PostMyproject;
