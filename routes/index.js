const router = require('koa-router')();
const index=require('../controller/index');
const logic_user=require('../model/logic_model/user');
router.prefix('/index');

router.get('/', logic_user.getUsers,index.getUsers);

router.get('/haha', function (ctx, next) {
  ctx.body = '/index/haha';
});

module.exports = router;
