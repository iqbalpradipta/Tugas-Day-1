const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

async function myprojectDetail(req, res) {
  const { id } = req.params;

  date = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  const query = `SELECT * FROM projects WHERE id=${id}`;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });

  let formatDateAwal
  let formatDateAkhir
  for (let i = 0; i < obj.length; i++) {
    const start_date = obj[i].start_date;
    const end_date = obj[i].end_date_string;

    const bulanAwal = (date[start_date.getMonth()])
    const tanggalAwal = (start_date.getDate())
    const tahunAwal = (start_date.getFullYear())

    const bulanAkhir = (date[end_date.getMonth()])
    const tanggalAkhir = (end_date.getDate())
    const tahunAkhir = (end_date.getFullYear())

    formatDateAwal = `${tanggalAwal} ${bulanAwal} ${tahunAwal}`
    formatDateAkhir = `${tanggalAkhir} ${bulanAkhir} ${tahunAkhir}`

    obj[i].formatDateAwal = formatDateAwal
    obj[i].formatDateAkhir = formatDateAkhir
  }

  for (let index = 0; index < obj.length; index++) {
    const start_date = obj[index].start_date;
    const end_date = obj[index].end_date_string;

    const timeDifference = end_date - start_date;
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    const monthDifference = end_date.getMonth() - start_date.getMonth() + 12 * (end_date.getFullYear() - start_date.getFullYear());
    const yearsDifference = end_date.getFullYear() - start_date.getFullYear();

    let msg = "";
    if (dayDifference >= 1 && dayDifference <= 31) {
      msg = dayDifference + " Day";
    } else if (monthDifference >= 1 && monthDifference <= 12) {
      msg = monthDifference + " Month";
    } else {
      msg = yearsDifference + " Years";
    }
    obj[index].msg = msg;
  }
  
  console.log("projectDetail", obj);

  res.render("myproject-detail", { data: obj[0] });
}


module.exports = myprojectDetail;
