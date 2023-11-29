const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");
const bcrypt = require("bcrypt");

async function register(req, res) {
  const { name, email, password } = req.body;

  const saltRounds = 10;
  try {
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const query = `INSERT INTO users(name, email, password) VALUES('${name}', '${email}', '${hash}')`;
      const obj = await sequelize.query(query, { type: QueryTypes.INSERT });
      console.log("register success", obj);
      res.redirect("/login");
    });
  } catch (error) {
    if (error) {
      console.error("Password failed to be encrypted!");
      res.redirect("/register");
    }
  }
}

module.exports = register;
