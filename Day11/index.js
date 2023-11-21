const express = require('express')
const path = require('path')
const app = express()
const port = 8000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/'))

app.get('/', home)
app.get('/about', about)

app.listen(port, () => {
    console.log(`Server Listening at ${port}....`)
})

function home(req, res) {
    res.send('Halo bwang')
} 
function about(req, res) {
    res.send('about bang')
} 