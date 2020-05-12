var express = require("express");
var app = express();



//共用 middleware
var login = function(req, res, next) {
    var _url = req.url;
    next()
    // _url !== '/' ? next() : res.send('你的登入資料有錯')
}

//增加靜態檔案的路徑
app.use(express.static('public'))

app.get('/',(req, res) => {
    res.send(`<html><head></head><body><h1>index</h1><img width="300" height="300" src="/image/wolf.png"/></body></html>`)
})

// 監聽 Port
var port = process.env.PORT || 3000;
app.listen(port)

