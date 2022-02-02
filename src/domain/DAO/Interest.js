const mongoose = require('mongoose').MongoClient;
const InterestSchema = require('../entity/interest');


module.exports.InterestRegister = function(interest) {
    InterestSchema.create(interest, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.InterestModify = function (interest) {
    InterestSchema.update(interest, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.InterestRemove = function (interest){
    InterestSchema.remove(interest, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.InterestFind = function (interest){
    return InterestSchema.findAll(interest, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





