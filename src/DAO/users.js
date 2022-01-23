const mongoose = require('mongoose').MongoClient;
const UserSchema = require(C:/Users/나영준/Documents/javascript/backend/src/domain/entity/user);


module.exports.UserRegister = function(user) {
    UserSchema.create(user, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserModify = function (user) {
    UserSchema.update(user, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserRemove = function (user){
    UserSchema.remove(user, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserFind = function (user){
    return  UserSchema.findOne(user, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





