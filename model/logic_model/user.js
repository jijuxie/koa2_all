'use strtic';
const db_users = require('../db_model/users');
var user = {};
user.getUsers = async function (ctx, next) {
    var users = JSON.parse(JSON.stringify(await db_users.findAll()));
    ctx.data.users = {};
    ctx.data.users.getUsers = users;//写入数据
    await next();
}

module.exports = user;