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
function defineModel(name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    attrs.id = {//强制属性id
        type: Sequelize.INTEGER(50),
        primaryKey: true,//声明主键
        autoIncrement: true//声明自增
    };
    attrs.createdAt = {//强制属性创建时间
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.updatedAt = {//强制属性修改时间
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.version = {//强制属性修改版本
        type: Sequelize.BIGINT,
        allowNull: false
    };
    return sequelize.define(mysql_config.db_prefix + name, attrs, {
        tableName: mysql_config.db_prefix_name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                //基本验证个自动填充属性
                let now = Date.now();
                if (obj.isNewRecord) {
                    if (!obj.id) {
                        obj.id = Sequelize.generateId;
                    }
                    obj.createdAt = now;
                    obj.updatedAt = now;
                    obj.version = 0;
                } else {
                    obj.updatedAt = Date.now();
                    obj.version++;
                }
            }
        }
    });
}
module.exports = defineModel;