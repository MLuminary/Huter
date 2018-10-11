const express = require('express')
const mongoose = require('mongoose')
const http = require('http')

let app = express()

mongoose.connect(
  'mongodb://haoqin:admin@134.175.168.195:27017/huter?authSource=admin',
  { useNewUrlParser: true },
  function(error) {
    console.log(error)
  }
)

mongoose.connection.on('connected', function() {
  console.log('MongoDB connected success')
})

mongoose.connection.on('disconnected', function() {
  console.log('MongoDB connected disconnected')
})

mongoose.connection.on('error', function() {
  console.log('MongoDB connected error')
})

let Message = require('./message')

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method === 'OPTIONS') res.send(200)
  else next()
})

app.get('/', function(req, res, next) {
  Message.find(function(err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        result: doc
      })
    }
  })
})

http.createServer(app).listen(3000)
