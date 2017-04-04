'use strict';
const Sequelize = require('sequelize');
const Rmodel=require('../../app_need/model');
const model=Rmodel.model;//此处虽然叫model但是实际上是sequelize的实例
const db_prefix=Rmodel.db_prefix;
var User=model.define(
    db_prefix+'users',{
        id:{
            type:Sequelize.INTEGER(20),
            primaryKey:true,//声明主键
            autoIncrement:true//声明自增
        },
        name:Sequelize.STRING(30),
        password:Sequelize.STRING(50)
    },{
        timestamps:false
    }
);
var user={};
//基本的增删改查
//增
user.create=function(data){
var the_data=data||{};
return  (async (ctx,next) => {
    var user = await  User.create(the_data);
    console.log('created: ' + JSON.stringify(user));
})();
}
//查
user.select=function(where){
var the_where=where||{};
return (async (ctx,next) => {
    var users = await User.findAll({
        where: the_where
    });
    console.log(`find ${users.length} user:`);
    for (let user of users) {
        console.log(JSON.parse(JSON.stringify(user)));
    }
     
})();
}
//改
user.updata=function(where,data){
var the_where=where||{};
var the_data=data||{};
return (async (ctx,next) => {
    var users = await User.findAll({
        where: the_where
    });
    for(let user of users){
user.name=the_data.name;
user.password=the_data.password;
await user.save();
    }
    
})();
}
//删
user.delete=function(where){
var the_where=where||{};
return (async (ctx,next) => {
     var users = await User.findAll({
        where: the_where
    });
    for(let user of users){
   await user.destroy();
    }
   
 
})();
}
module.exports=user;