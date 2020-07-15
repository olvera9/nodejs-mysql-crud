const environment = require('./environment.js')
const express = require('express')
//const statsd = require('express-statsd')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')

const app = express()

// importing routes
const customerRoutes = require('./routes/customer')

// settings
app.set('port', process.env.PORT || environment.app.port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
//app.use(statsd({host: 'statsd', port: 8126}))
app.use(morgan('dev'))
app.use(myConnection(mysql, {
  host: environment.mysql.host,
  user: environment.mysql.user,
  password: environment.mysql.password,
  port: environment.mysql.port,
  database: environment.mysql.database
}, 'single'))
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', customerRoutes)

// static files
app.use(express.static(path.join(__dirname, 'public')))

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
