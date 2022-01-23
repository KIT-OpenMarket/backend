const mongoose = require('mongoose').MongoClient;
const UserInterestSchema = require(C:/Users/나영준/Documents/javascript/backend/src/domain/entity/userInterest);


module.exports.UserInterestRegister = function(userInterest) {
    UserInterestSchema.create(userInterest, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserInterestModify = function (userInterest) {
    UserInterestSchema.update(userInterest, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserInterestRemove = function (userInterest){
    UserInterestSchema.remove(userInterest, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserInterestFind = function (userInterest){
    return UserInterestSchema.findAll(userInterest, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





