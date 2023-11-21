const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/view'))

app.use('/assets', express.static('src/assets'))
app.use(express.urlencoded({ extended: false }))

app.get('/', home)
app.get('/contact', contact)

function home(req, res) {
    res.render('index')
} 
function contact(req, res) {
    res.render('contact')
} 




app.listen(port, () => {
    console.log(`Server Listening at ${port}....`)
})
