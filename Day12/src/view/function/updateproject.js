const data = require('./data');

function updateproject(req, res) {
  const { title, description, id, startdate, enddate } = req.body;

  console.log('id: ', id);
  console.log('title: ', title);
  console.log('startdate: ', startdate);
  console.log('enddate: ', enddate);
  console.log('description: ', description);

  data[parseInt(id)] = {
    title,
    startdate,
    enddate,
    description
  };

  res.redirect('/');
}

module.exports = updateproject;
