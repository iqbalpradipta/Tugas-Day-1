const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");
const bcrypt = require("bcrypt");

async function login(req, res) {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email='${email}'`;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });

  if (!obj.length) {
    console.error("user not registered!");
    return res.redirect("/login");
  }

  bcrypt.compare(password, obj[0].password, function (err, result) {
    if (err) {
      console.log("Internal server error", err);
      return res.redirect("/login");
    }

    if (!result) {
      console.log("pswd is wrong", result);
      return res.redirect("/login");
    }

    console.log('login success')
    return res.redirect('/')
  });

}

module.exports = login;
