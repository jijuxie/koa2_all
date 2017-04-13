'use strict';
//创造users表的映射
const Sequelize = require('sequelize');
const definddb=require('../../app_need/db');
var attr={//填充额外属性
name:Sequelize.STRING(30),
password:Sequelize.STRING(50)
}
var db_users= definddb('users',attr);
module.exports=db_users;