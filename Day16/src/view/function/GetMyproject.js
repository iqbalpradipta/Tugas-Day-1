const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

async function GetMyproject(req, res) {
  const query = "SELECT * FROM projects";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render('myproject', { data: obj, user: req.session.users, isLogin: req.session.isLogin });
}

module.exports = GetMyproject;