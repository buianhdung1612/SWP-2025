const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()
const cors = require('cors');
app.use(cors())

const database = require("./config/database");
database.connect();

// Template engines: PUG
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

// File tĩnh
app.use(express.static(`${__dirname}/public`))

const routeAdmin = require("./routes/admin/index.route");
routeAdmin(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})