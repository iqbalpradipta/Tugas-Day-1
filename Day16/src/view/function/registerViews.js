function registerViews(req, res) {
    res.render('register', { user: req.session.users, isLogin: req.session.isLogin })
}

module.exports = registerViews