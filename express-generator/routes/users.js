var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/GetPdf', function(req, res) {
  var file = fs.createReadStream('./public/sample.pdf')
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
  file.pipe(res)
})

module.exports = router;
