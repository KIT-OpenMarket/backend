const mongoose = require('mongoose');
const UserInterestSchema = require('../entity/userInterest');


module.exports.UserInterestRegister = function(userInterest) {
    UserInterestSchema.create(userInterest, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserInterestModify = function (userInterest) {
    UserInterestSchema.update(userInterest, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserInterestRemove = function (userInterest){
    UserInterestSchema.remove(userInterest, function(err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.UserInterestFind = function (userInterest){
    return UserInterestSchema.find(userInterest, function(err){}.exec() )
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





