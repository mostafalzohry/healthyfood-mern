const express = require('express')
var cors = require('cors')
require('dotenv').config()
//2
const mainRoutes = require('./routes/main_routes')
const foodRoutes = require('./routes/foods_routes')
const { errorHandler } = require('./middleware/errorMiddleware')
//5
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/HealthyFood', {useNewUrlParser: true, useUnifiedTopology: true})

// 1
const app = express()

//4
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.static('uploadImage'))
//3
mainRoutes(app)
foodRoutes(app)
app.use('/users', require('./routes/users_routes'))
app.use('/gmail', require('./routes/sendmail_routes'))

app.use(errorHandler)

module.exports = app;
