const express = require('express');
const connectMongo = require("./database/db");
const routes = require("./router/mroutes");
const cors = require('cors');
const app = express()
connectMongo()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/m',routes)


app.listen(4000, () => {
    console.log('server is running....');

})