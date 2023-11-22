function myprojectDetail(req, res) {
  const id = req.params.id;
  const title = 'Bang Ngapain menjadi challange';
  const description = 'Challange ini keren abis bersama Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, at.';

  console.log("detail ID: ", id)

  const data = {
    id,
    title,
    description,
  };

  res.render('myproject-detail', { data });
}

module.exports = myprojectDetail;