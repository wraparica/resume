const path = require('path')
const express = require('express')
const indexRoutes = require('./routes/index')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
//app.use('/admin',adminData.routes)
//app.use(shopRoutes)
app.use(indexRoutes)



app.listen(3000)