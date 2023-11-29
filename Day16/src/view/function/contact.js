const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

async function contact(req, res) {
  const query = "SELECT * FROM projects";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  
  res.render('contact', { data: obj, user: req.session.user, isLogin: req.session.isLogin, user: req.session.user });
}

module.exports = contact;