var express = require('express');
var router = express.Router();
const { PinRegister, PinModify, PinRemove } = require('./../../domain/DAO/pin');
const { PinGroupRegister, PinGroupModify, PinGroupRemove } = require('./../../domain/DAO/pinGroup');

/* GET users listing. */

router.post('/pinGroupRegister', function(req, res, next) {
    PinGroupRegister(req.body);
    console.log(req.body);
    res.send(200);
    next();
});

router.delete('/pinGroupRemove', function(req, res) {
    PinGroupRemove(req.body);
    console.log('success');
    res.send(200);
});

router.post('/pinModify', function(req, res) {
    PinModify(req.body);
    console.log('success');
    res.send(200);
});




module.exports = router;