const mongoose = require('mongoose');
const PinGroupSchema = require('./../entity/pinGroup');


module.exports.PinGroupRegister = function(pinGroup) {
    PinGroupSchema.create(pinGroup, function (err){}.exec())
}
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.PinGroupModify = function (pinGroup) {
    PinGroupSchema.remove(pinGroup, function (err) {
    }.exec())
        .then((result) => {
            console.log(result);
        }).catch((err) => {
        console.error(err);
    });
}
    module.exports.PinGroupRemove = function (pinGroup) {
        PinGroupSchema.remove(pinGroup, function (err) {
        }.exec())
    }
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        });

    module.exports.PinGroupFind = function (pinGroup) {
        return PinGroupSchema.findById(pinGroup._id, function (err) {
        }.exec())
    }
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        });




