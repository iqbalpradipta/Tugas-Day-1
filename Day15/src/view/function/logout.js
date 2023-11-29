function logout(req, res) {
  req.session.destroy((err) => {
    res.redirect('/');
  });
  return req.flash('success', 'logout success!');
}

module.exports = logout;
