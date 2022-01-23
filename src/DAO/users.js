var mongoose = require('mongoose').MongoClient;
var schema = require('C:/Users/나영준/Documents/javascript/backend/src/domain/entity');
var UserSchema = require(C:/Users/나영준/Documents/javascript/backend/src/domain/entity/user);


module.exports.UserRegister = function(User) {
    UserSchema.create(req.body, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserModify = function (User) {
    UserSchema.update(req.body, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserRemove = function (UserSchema.id){
    UserSchema.remove(req.body, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserFindOne = function (UserSchema.id){
    return  UserSchema.findOne(req.body, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.



