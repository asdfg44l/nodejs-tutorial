var express = require('express')
var app = express()
var bodyParser = require('body-parser');

// 增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set view engine
app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'pug')

//middleware
app.use(function(req, res, next) {
    // console.log(1234)
    next()
})
//page
app.get('/', (req, res) => {
    res.render('index', { 
        title: '我是標題',
        list: ['Tom', 'Dan', 'John', 'Adam']
    })
})
//API
var _API = require('./API/index.js')
app.use(_API)


//無此頁面
app.use(function(req, res, next) {
    res.status(404).send('無此頁面')
})

//程式錯誤
app.use(function(err, req, res, next) {
    console.log(err)
    res.status(500).send('程式錯誤')
})

var port = process.env.PORT || 3000;
app.listen(port)