var router = require('koa-router')();
var fs=require('fs');
var path=require('path');
const basename=path.basename(module.filename);
//用于分发响应请求给controller
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    let route = require(path.join(__dirname, file))
    router.use(route.routes(), route.allowedMethods())
  })
module.exports = router;
