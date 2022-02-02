const mongoose = require('mongoose').MongoClient;
const ChattingRoomSchema = require('../entity/chattingRoom');


module.exports.ChattingRoomRegister = function(chattingRoom) {
    ChattingRoomSchema.create(chattingRoom, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingRoomModify = function (chattingRoom) {
    ChattingRoomSchema.update(chattingRoom, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingRoomRemove = function (chattingRoom){
    ChattingRoomSchema.remove(chattingRoom, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.ChattingRoomFind = function (chattingRoom){
    return ChattingRoomSchema.findOne(chattingRoom, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





