const mongoose = require('mongoose').MongoClient;
const PinGroupSchema = require(C:/Users/나영준/Documents/javascript/backend/src/domain/entity/pinGroup);


module.exports.PinGroupRegister = function(pinGroup) {
    PinGroupSchema.create(pinGroup, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinGroupModify = function (pinGroup) {
    PinGroupSchema.update(pinGroup, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinGroupRemove = function (pinGroup){
    PinGroupSchema.remove(pinGroup, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinGroupFind = function (pinGroup){
    return PinGroupSchema.findOne(pinGroup, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





