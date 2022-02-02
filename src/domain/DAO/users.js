const mongoose = require('mongoose').MongoClient;
const UserSchema = require('../entity/user');
const PinSchema = require("../entity/pin");


module.exports.UserRegister = function(user) {
    UserSchema.create(user, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserModify = function (user) {
    UserSchema.update(user, function (err){}.exec()),
    PinSchema.update({ _id : user._id }, {modified_date : Date.now })
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserRemove = function (user){
    UserSchema.remove(user, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserFind = function (user){
    return  UserSchema.findById(user._id, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





