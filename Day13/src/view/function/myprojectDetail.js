const data = require('./data');

function myprojectDetail(req, res) {
  const { id } = req.params;

  const dataFilter = data[parseInt(id)];
  dataFilter.id = parseInt(id);
  console.log('dataFilter', dataFilter);
  res.render('myproject-detail', { data: dataFilter });
}

module.exports = myprojectDetail;
