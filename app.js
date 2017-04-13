const Koa = require('koa');//导入koa
const app = new Koa();//声明一个koa对象表示koa本身
// const views = require('koa-views');//导入模板模块不使用这种东西
const views = require('nunjucks');
const json = require('koa-json');//导入json模块
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');//console日志系统
const _index = require('./routes/_index');
const index = require('./routes/index');
//log工具
const log = require('./app_need/log');
// error handler
onerror(app);

// middlewares
app.use(bodyparser);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
// app.use(views(__dirname + '/views', {
//   extension: 'jade'
// }));

// logger任何请求都从此处走，这是明面上的第一个异步函数用于记录发生的一整个请求所花费的时间
app.use(async (ctx, next) => {
  const start = new Date();
  try {
    
    await next();
    const ms = new Date() - start;
    log.logResponse(ctx, ms);
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);//打印请求的方式请求的url和请求所花费的时
  } catch (e) {
    const ms = new Date() - start;
    log.logError(ctx, e, ms);
  }
});
// routes
app.use(_index.routes(), _index.allowedMethods());

module.exports = app;
