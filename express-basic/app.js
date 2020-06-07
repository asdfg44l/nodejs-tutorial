var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// 增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//增加靜態檔案的路徑
app.use(express.static('public'))

var engine = require('ejs-locals'); //引入 ejs
app.engine('ejs', engine); //當前使用的 template 語言
app.set('views', './views'); //要去哪裡找模板
app.set('view engine', 'ejs'); //設定 express 要使用哪種 template 語言

var user = require('./routes/user');

app.use('/user', user);

app.get('/', function(req, res) {
    res.render('index', { 
        isShow: true,
        title: "<h3>安安你好</h3>",
        Boss: "沒人",
        course: ["HTML", "JS", "Vue"]
    })
})

app.post('/searchList', function(req, res) {
    console.log(req.body)
    res.redirect('search')
})
app.post('/searchAJAX', function(req, res) {
    console.log(req.body.content)
    res.send({title: 'hello!!!!'})
})
// 監聽 Port
var port = process.env.PORT || 3000;
app.listen(port)

