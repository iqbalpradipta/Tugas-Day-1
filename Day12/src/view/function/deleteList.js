const data = require('./data');

function deleteList(req, res) {
  const { id } = req.params;

  console.log('delete index: ', id);
  data.splice(id, 1);
  res.redirect('/');
}

module.exports = deleteList;
