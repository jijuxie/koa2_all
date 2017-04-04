'use strict';
const Sequelize = require('sequelize');
const Rmodel = require('../../app_need/model');
const model = Rmodel.model;//此处虽然叫model但是实际上是sequelize的实例
const db_prefix = Rmodel.db_prefix;
class Model {
    constructor(table_name, table_config) {
        this.table_name = table_name;
        this.table_prefix = db_prefix;
        this.table_config = table_config;
        this.attributrs = null;
        this.where = null;
        this.limit = null;
        this.offset = null;
        this.order = null;
        this.DB = model.define(
            this.table_prefix + this.table_name, this.table_config
        );
    }
    //初始化条件
    start() {
        this.attributrs = null;
        this.where = null;
        this.limit = null;
        this.offset = null;
        this.order = null;
    }


    //基础查询的字段配置
    view(attributrs) {
        this.attributrs = attributrs;
    }
    //基础where
    where(where) {
        this.where = where;
    }
    //基础order
    order(order) {
        this.order = order;
    }
    //基础limit
    limit(limit) {
        this.limit = limit;
    }
    //基础offset
    offset(offset) {
        this.offset = offset;
    }
    //基础拼接
    spl() {
        var spl = {};
        if (this.where != null) {
            spl.where = this.where;
        }
        if (this.attributrs != null) {
            spl.attributrs = this.attributrs;
        }
        if (this.order != null) {
            spl.order = this.order;
        }
        if (this.limit != null) {
            sql.limit = this.limit;
        }
        if (this.offset != null) {
            spl.offset = this.offset;
        }
        return spl;
    }
    //基础增
    create(data) {
        var the_data = data || {};
        return (async (ctx, next) => {
            var res = await this.DB.create(the_data);
            console.log('created: ' + JSON.stringify(res));
            return res;
        })();
    }
    //基础查(多条查询)
    select() {
        return (async () => {
            var reses = await this.DB.findAll(this.spl());
            console.log(`find ${reses.length} res:`);
            var theRes = [];
            try {
                for (let res of reses) {
                    theRes[] = JSON.parse(JSON.stringify(res));
                }
            }
            catch (e) {
                console.log(e);
                theRes = JSON.parse(JSON.stringify(reses))
            }
            return theRes;

        })();
    }
    //基础查(单条查询)
    find() {
        return (async () => {
            var res = await this.DB.findOne(this.spl());
            if (res != null) {
                console.log('find the res in table ' + this.table_name);

            } else {
                console.log('no find in table ' + this.table_name);
            }
            return res;
        })();
    }
    //基础查（by id）
    findById(id) {
        return (async () => {
            var res = await this.DB.findById(id);
            if (res != null) {
                console.log('find the res in table ' + this.table_name + ' where id of ' + id);
            } else {
                console.log('no find in table ' + this.table_name + ' where id of ' + id);
            }
            return res;
        })();
    }
    //改
    updata(where, data) {
        var the_where = where || {};
        var the_data = data || {};
        return (async (ctx, next) => {
            var reses = await this.DB.findAll(this.spl());
            for (let res of reses) {
                res.name = the_data.name;
                res.password = the_data.password;
                await res.save();
            }

        })();
    }
    //删
    delete(where) {
        var the_where = where || {};
        return (async (ctx, next) => {
            var reses = await this.DB.findAll({
                where: the_where
            });
            for (let res of reses) {
                await res.destroy();
            }


        })();
    }
}