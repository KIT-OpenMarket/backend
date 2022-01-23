const mongoose = require('mongoose').MongoClient;
const EvaluationSchema = require(C:/Users/나영준/Documents/javascript/backend/src/domain/entity/evaluation);


module.exports.EvaluationRegister = function(evaluation) {
    EvaluationSchema.create(evaluation, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.EvaluationModify = function (evaluation) {
    EvaluationSchema.update(evaluation, function (err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.EvaluationRemove = function (evaluation){
    EvaluationSchema.remove(evaluation, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

module.exports.EvaluationFind = function (evaluation){
    return EvaluationSchema.findOne(evaluation, function(err).exec();
})
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});





