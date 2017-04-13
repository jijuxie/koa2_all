'use strtic';
const db_users = require('../db_model/users');
var user={};
user.getUsers=async function (ctx,next) {
    var users = JSON.parse(JSON.stringify(await db_users.findAll()));
   ctx.data.res=users;
   next();

}
module.exports=user;