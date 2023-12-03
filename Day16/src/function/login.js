const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

async function login(req, res) {
  let { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email='${email}'`;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });

  if (!obj.length) {
    console.error('user not registered!');
    req.flash('danger', 'Login failed : Email/Password is wrong!');
    return res.redirect('/login');
  }

  bcrypt.compare(password, obj[0].password, function (err, result) {
    if (err) {
      console.log('Internal server error', err);
      req.flash('danger', 'Login Failed: Internal Server Error!');
      return res.redirect('/login');
    }

    if (!result) {
      console.log('pswd is wrong', result);
      req.flash('danger', 'Login Failed: Email/Password is wrong!');
      return res.redirect('/login');
    }

    console.log('login success');

    req.flash('success', 'login success!');
    req.session.isLogin = true;
    req.session.users = {
      id: obj[0].id,
      name: obj[0].name,
      email: obj[0].email,
    };

    console.log('data login:', req.session.users);

    return res.redirect('/');
  });
}

module.exports = login;
