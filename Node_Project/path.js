var path = require('path');

console.log(path.dirname("xx/yy/zz.js"))

console.log(path.join(__dirname, '/xx'))

console.log(path.basename("xx/yy/zz.js"))

console.log(path.extname("xx/yy/zz.js"))

console.log(path.parse("xx/yy/zz.js"))

console.log(path.resolve("xx/yy/zz.js"))