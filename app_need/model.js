'use strict';
//sequelize实例声明
const Sequelize = require('sequelize');
const config = require('../app_need/config');
var mysql_config = config.mysql_config;
var sequelize = new Sequelize(mysql_config.db_name, mysql_config.db_user, mysql_config.db_password, {
    host: mysql_config.db_host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
var db_prefix = mysql_config.db_prefix;//为了节约代码向下传递表前缀
module.exports = {
    model: sequelize, db_prefix: db_prefix
};