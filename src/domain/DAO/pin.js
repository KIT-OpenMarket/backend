const mongoose = require('mongoose').MongoClient;
const PinSchema = require('../entity/pin');


module.exports.PinRegister = function(pin) {
    PinSchema.create(pin, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinModify = function (pin) {
    PinSchema.update(pin, function (err){}.exec()),
        PinSchema.update({ _id :pin._id }, {modified_date : Date.now })
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinRemove = function (pin){
    PinSchema.remove(pin, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinFind = function (pin){
    return PinSchema.findAll(pin, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});




