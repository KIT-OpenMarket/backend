var express = require('express');
var router = express.Router();
const {  UserModify, UserRemove, UserFindMyPage } = require('./../../domain/DAO/users');
const { PinFind } = require('./../../domain/DAO/pin');
const {  EvaluationModify, EvaluationRemove, EvaluationFind } = require('./../../domain/DAO/evaluation');
const { InterestRegister, InterestModify, InterestRemove, InterestFind } = require('./../../domain/DAO/evaluation');

/* GET users listing. */

router.get('/userFindMyPage', function(req, res) {
    if(UserFindMyPage()!== null){
        console.log('success');
        res.send(UserFind());
    }
    else {
        console.log('error');
        res.send('error');
    }
});

router.delete('/userRemove', function(req, res) {
    UserRemove(req.body);
    console.log(req.body);
    res.send(200);
});

router.post('/userModify', function(req, res) {
    UserModify(req.body);
    console.log(success);
    res.send(200);
});


router.get('/pinFind', function(req, res) {
    if(PinFind()!== null){
        console.log('success');
        res.send(PinFind());
    }
    else {
        console.log('error');
        res.send('error');
    }
});


router.get('/evaluationFind', function(req, res) {
    if(EvaluationFind()!== null){
        console.log('success');
        res.send(EvaluationFind());
    }
    else {
        console.log('error');
        res.send('error');
    }
});

router.delete('/evaluationRemove', function(req, res) {
    EvaluationRemove(req.body);
    console.log('success');
    res.send(200);
});

router.post('/evaluationModify', function(req, res) {
    EvaluationModify(req.body);
    console.log('success');
    res.send(200);
});



module.exports = router;