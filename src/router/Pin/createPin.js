var express = require('express');
var router = express.Router();
const { PinRegister, PinModify, PinRemove } = require('./../../domain/DAO/pin');
/* GET users listing. */


router.post('/pinRegister', function(req, res, next) {
    PinRegister(req.body);
    console.log(req.body);
    res.send(200);
    next();
});

router.delete('/pinRemove', function(req, res) {
    PinRemove(req.body);
    console.log('success');
    res.send(200);
});

router.post('/pinModify', function(req, res) {
    PinModify(req.body);
    console.log('success');
    res.send(200);
});



module.exports = router;