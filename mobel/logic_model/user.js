'use strict';
var db_user = require('../../mobel/db_model/users');
var f = {};
f.f1 = function () {
    db_user.create({ name: '神1', password: 'abcd' });
}
f.f2 = function () {
    db_user.select({ name: '神1', password: 'abcd' });
}
f.f3=function(){
    db_user.updata({ name: '神1', password: 'abcdl' },{name:'神2',password:'hahahah'});
}
f.f4=function(){
    db_user.delete({ name: '神1', password: 'abcd' });
}
module.exports = f;