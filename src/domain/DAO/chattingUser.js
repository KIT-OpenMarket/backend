const mongoose = require('mongoose');
const ChattingUserSchema = require('../entity/chattingUser');


module.exports.ChattingUserRegister = function(chattingUser) {
    ChattingUserSchema.create(chattingUser, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingUserModify = function (chattingUser) {
    ChattingUserSchema.update(chattingUser, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingUserRemove = function (chattingUser){
    ChattingUserSchema.remove(chattingUser, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingUserFind = function (chattingUser){
    return ChattingUserSchema.findById(chattingUser._id, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





