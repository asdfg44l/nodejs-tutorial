var express = require('express')
var app = express()

app.post('/searchData', function(req, res) {
    console.log(req.body)
    res.send({title: 'Hello'})
})

module.exports = app