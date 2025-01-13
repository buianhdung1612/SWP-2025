const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

const database = require("./config/database");
database.connect();

const routeAdmin = require("./routes/admin/index.route");
routeAdmin(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})