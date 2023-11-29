const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

async function GetMyproject(req, res) {
  const query = "SELECT * FROM projects";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render('myproject', { data: obj, user: req.session.user, isLogin: req.session.isLogin, user: req.session.user });
}

module.exports = GetMyproject;