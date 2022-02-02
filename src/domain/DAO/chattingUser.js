const mongoose = require('mongoose').MongoClient;
const ChattingUserSchema = require('../entity/chattingUser');


module.exports.ChattingUserRegister = function(chattingUser) {
    EvaluationSchema.create(chattingUser, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingUserModify = function (chattingUser) {
    EvaluationSchema.update(chattingUser, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingUserRemove = function (chattingUser){
    EvaluationSchema.remove(chattingUser, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingUserFind = function (chattingUser){
    return EvaluationSchema.findById(chattingUser._id, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





