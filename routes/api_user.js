'use strict';
const router = require('koa-router')();
router.prefix('/api/user');

router.get('/:id', function (ctx, next) {//定义读取
    console.log(ctx.params.id);
    ctx.rest({ data: 'api_user接口接口get' });
});
router.post('/:id', function (ctx, next) {//定义增加
    console.log(ctx.params.id);
    ctx.rest({ data: 'api_user接口接口post' });
});
router.put('/:id', function (ctx, next) {//定义更新
    console.log(ctx.params.id);
    ctx.rest({ data: 'api_user接口接口put' });
});
router.del('/:id', function (ctx, next) {//定义删除
    console.log(ctx.params.id);
    ctx.rest({ data: 'api_user接口接口del' });
});
router.patch('/:id', function (ctx, next) {//定义局部更新
    console.log(ctx.params.id);
    ctx.rest({ data: 'api_user接口接口patch' });
});
module.exports = router;
