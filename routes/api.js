
const router = require('koa-router')();
router.prefix('/api');
router.get('/', function (ctx, next) {
  ctx.rest({code:0,message:'ok',data:'api接口'});
});
router.post('/', function (ctx, next) {
   ctx.rest({code:0,message:'ok',data:'api接口'});
});

module.exports = router;
