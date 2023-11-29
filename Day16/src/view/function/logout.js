function logout(req, res) {
  req.session.isLogin = false
  req.session.user = {}
  req.flash('success', 'logout success!')
  res.redirect('/')
}

module.exports = logout;
