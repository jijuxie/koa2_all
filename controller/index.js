'use strict';
const db_users = require('../mobel/db_model/users');
const view = require('../app_need/view');
const logic_user = require('../mobel/logic_model/user');
var index = {};
index.getUsers2 = async function (ctx, next) {
    var users = JSON.parse(JSON.stringify(await db_users.findAll()));
    console.log(users);
    var v = view.render('index.html', { users: users });
    ctx.body = v;
}

var getUsers = async function (ctx, next) {
    var users = ctx.data.res;
    var v = view.render('index.html', { users: users });
    ctx.body = v;
}

// index.getUsers = getUsers2 ;



module.exports = index;