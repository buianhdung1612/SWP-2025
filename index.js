const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

const database = require("./config/database");
database.connect();

app.get('/', (req, res) => {
    res.send('Hello Worldđs!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})