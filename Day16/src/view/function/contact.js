const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

function contact(req, res) {
  res.render('contact', { user: req.session.users, isLogin: req.session.isLogin });
}

module.exports = contact;