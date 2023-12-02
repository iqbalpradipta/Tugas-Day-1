function loginViews(req, res) {
    res.render('login', { user: req.session.users, isLogin: req.session.isLogin })
}

module.exports = loginViews