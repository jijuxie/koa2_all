var router = require('koa-router')();
//我们只制定根目录下的/在二级目录里可以使用/
router.prefix('/');
router.get('', function (ctx, next) {
  ctx.body = '这是根目录/';
});

module.exports = router;
