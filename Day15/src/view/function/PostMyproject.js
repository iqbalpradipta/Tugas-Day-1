const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

async function PostMyproject(req, res) {
  const { name, start_date, end_date_string, description } = req.body;

  const image = "https://assets-global.website-files.com/6100d0111a4ed76bc1b9fd54/6193dca3e8165c52e89c7f2b_florian-olivo-4hbJ-eymZ1o-unsplash-p-2000.jpeg";
  const technologies = '{nextJS, reactJS, typescript}'
  const query = `INSERT INTO projects(name, start_date, end_date_string, description, technologies, image) VALUES('${name}', '${start_date}', '${end_date_string}', '${description}', '${technologies}', '${image}')`;

  const obj = await sequelize.query(query, { type: QueryTypes.INSERT });

  console.log('Data Insert Successfuly= ', obj)
  req.flash('success', 'Success Insert Project!')

  res.redirect("/");
}

module.exports = PostMyproject;
