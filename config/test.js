'use strict';
/**
 * 测试环境配置文件
 */
var config = {
    env: 'test', //环境名称
    port: 3002,         //服务端口号
    mysql_config: {
        //mysql数据库配置
        db_name:'node',//数据库名称
        db_user:'root',//数据库使用者名称
        db_password:'',//使用者密码
        db_host:'localhost',//地址
        db_port:'3306',//端口号
        db_prefix:'node_'//表前缀
    },
    mongodb_config: {
        //mongodb数据库配置
    },
    redis_config: {
        //redis缓存配置
    },

};
module.exports=config;