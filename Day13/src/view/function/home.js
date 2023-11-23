const data = require('./data');
function home(req, res) {
  res.render('index',  { data });
}

module.exports = home;
