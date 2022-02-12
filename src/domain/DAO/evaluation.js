const mongoose = require('mongoose');
const EvaluationSchema = require('../entity/evaluation');

function CreateEvaluation(Evaluation) {
    try {
        EvaluationSchema.create(Evaluation);
        console.log('create Evaluation : ', Evaluation);
        return 1;
    }catch (err){
        console.log('CreateEvaluation Error');
        console.error(err);
        return 0;
    }
}

function DeleteEvaluation(Evaluation) {
    try{
        EvaluationSchema.deleteOne({_id : Evaluation._id});
        console.log('delete Evaluation : ', Evaluation);
        return 1;
    }catch (err) {
        console.log('deleteEvaluation error: ');
        console.error(err);
        return 0;
    }
}

function FindEvaluationWithTargetId(target_id){
    try{
        EvaluationSchema.find({target_id : target_id}).then(function (datalist) {
            console.log('totalEvaluationWithTargetId datalist', datalist);
            return datalist;
        });
    }catch (err){
        console.log('totalEvaluationWithTargetId error : ');
        console.error(err);
        return undefined;
    }
}

function FindEvaluationWithUserId(user_id){
    try{
        EvaluationSchema.find({user_id:user_id}).then(function (datalist) {
            console.log('totalEvaluationWithUserId datalist', datalist);
            return datalist;
        });
    }catch (err){
        console.error(err);
        console.log('totalEvaluationWithUserId error : ');
        return undefined;
    }
}
