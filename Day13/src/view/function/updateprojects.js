const data = require('./data');

function updateprojects(req, res) {
    const { id } = req.params

    const dataFilter = data[parseInt(id)]
    dataFilter.id = parseInt(id)
    console.log("dataFilter", dataFilter)
    res.render('updateproject', { data: dataFilter })
}

module.exports = updateprojects;