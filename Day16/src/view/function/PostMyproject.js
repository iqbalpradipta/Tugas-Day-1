const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models');

async function PostMyproject(req, res) {
  const { name, start_date, end_date_string, description, technologies } = req.body;
  const image = req.file.filename;
  const userId = req.session.users.id;

  const query = `INSERT INTO projects(name, start_date, end_date_string, description, technologies, image, "userId") VALUES('${name}', '${start_date}', '${end_date_string}', '${description}', ARRAY['${technologies}'], '${image}', '${userId}') `;
  const obj = await sequelize.query(query, { type: QueryTypes.INSERT });

  console.log('Data Insert Successfuly= ', obj);
  req.flash('success', 'Success Insert Project!');

  res.redirect('/');
}

module.exports = PostMyproject;
