const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const data = require('./data');

async function updateprojects(req, res) {
  const { id } = req.params;

  const query = `SELECT projects.id, projects.name, projects.start_date, projects.end_date_string, projects.description ,projects.technologies, projects.image, 
  users.name AS users, users.id AS usersId, projects."createdAt", projects."updatedAt" FROM projects LEFT JOIN users ON
  projects."userId" = users.id WHERE projects.id=${id}`;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });

  for (let index = 0; index < obj.length; index++) {
    const start_date = obj[index].start_date;
    const end_date = obj[index].end_date_string;

    let bulanAwal = start_date.getMonth() + 1;
    let tanggalAwal = start_date.getDate();
    let tahunAwal = start_date.getFullYear();

    let bulanAkhir = end_date.getMonth() + 1;
    let tanggalAkhir = end_date.getDate();
    let tahunAkhir = end_date.getFullYear();

    if (bulanAwal < 10) {
      bulanAwal = '0' + bulanAwal;
    }
    if (tanggalAwal < 10) {
      tanggalAwal = '0' + tanggalAwal;
    }

    if (bulanAkhir < 10) {
      bulanAkhir = '0' + bulanAkhir;
    }
    if (tanggalAkhir < 10) {
      tanggalAkhir = '0' + tanggalAkhir;
    }


    let updateStartDate = `${tahunAwal}-${bulanAwal}-${tanggalAwal}`;
    let updateEndDate = `${tahunAkhir}-${bulanAkhir}-${tanggalAkhir}`;
    obj[index].updateStartDate = updateStartDate;
    obj[index].updateEndDate = updateEndDate;
  }

  console.log('update blog view', obj);
  res.render('updateproject', { data: obj[0], user: req.session.users, isLogin: req.session.isLogin, user: req.session.user });
}

module.exports = updateprojects;
