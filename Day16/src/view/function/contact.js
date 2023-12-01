const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

function contact(req, res) {
  res.render('contact');
}

module.exports = contact;