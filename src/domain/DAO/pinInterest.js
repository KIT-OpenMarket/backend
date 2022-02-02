const mongoose = require('mongoose').MongoClient;
const PinInterestSchema = require('../entity/pinInterest');


module.exports.PinInterestRegister = function(pinInterest) {
    PinInterestSchema.create(pinInterest, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinInterestModify = function (pinInterest) {
    PinInterestSchema.update(pinInterest, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinInterestRemove = function (pinInterest){
    PinInterestSchema.remove(pinInterest, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinInterestFind = function (pinInterest){
    return PinInterestSchema.findAll(pinInterest, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





