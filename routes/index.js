const router = require('koa-router')();
const index=require('../controller/index');
router.prefix('/index');

router.get('/', index.getUsers2);

router.get('/haha', function (ctx, next) {
  ctx.body = '/index/haha';
});

module.exports = router;
