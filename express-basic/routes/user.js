var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('搜尋首頁')
})

router.get('/search', function(req, res) {
    res.render('search')
})

router.get('/:name/:list', function(req, res) {
    let { name, list } = req.params
    res.render('user', { name, list })
})

module.exports = router;

