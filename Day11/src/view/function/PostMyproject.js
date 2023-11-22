function PostMyproject(req, res) {
  const title = req.body.title;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const description = req.body.description;

  console.log('Title: ', title);
  console.log('startdate: ', startdate);
  console.log('enddate: ', enddate);
  console.log('Description: ', description);

  res.redirect('myproject-detail/1');
}

module.exports = PostMyproject;