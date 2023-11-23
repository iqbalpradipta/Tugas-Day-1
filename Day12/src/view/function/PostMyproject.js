function PostMyproject(req, res) {
  const data = require('./data');

  const title = req.body.title;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const description = req.body.description;

  console.log('Title: ', title);
  console.log('startdate: ', startdate);
  console.log('enddate: ', enddate);
  console.log('Description: ', description);

  const dataProj = {
    title, 
    startdate, 
    enddate, 
    description
  }

  data.unshift(dataProj)

  res.redirect('/');
}

module.exports = PostMyproject;