const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Halo bwang')
})

app.listen(port, () => {
    console.log(`Server Listening at ${port}....`)
})