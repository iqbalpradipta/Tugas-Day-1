function logout(req, res) {
  req.flash('success', 'logout success!');
  req.session.isLogin = false;
  req.session.user = {};
  
  res.redirect('/');
}

module.exports = logout;
