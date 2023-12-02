const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

async function testimonial(req, res) {
  const query = "SELECT * FROM projects";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render('testimonial', { data: obj, user: req.session.users, isLogin: req.session.isLogin});
}

module.exports = testimonial;