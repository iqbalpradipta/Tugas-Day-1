function logout(req, res) {
  req.flash('success', 'logout success!');
  req.session.isLogin = false;
  req.session.users = {};
  
  res.redirect('/');
}

module.exports = logout;
