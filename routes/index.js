var router = require('koa-router')();
var view = require('../app_need/view');
var user=require('../mobel/logic_model/user');
router.get('/', async function (ctx, next) {
  var v = view.render('index.html', { name: '小明2222' });
   var post= ctx.body;
   var get= ctx.query;
user.f1();
// user.f2();
// user.f3();
// user.f4();
    ctx.body = v;
})


module.exports = router;
