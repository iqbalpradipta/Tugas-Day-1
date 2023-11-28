const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");
const data = require("./data");
async function home(req, res) {
  const query = "SELECT * FROM projects";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  console.log("databaseProjects= ", obj);

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
  
  res.render("index", { data: obj });
}

module.exports = home;
