var express = require('express');
var router = express.Router();
const { UserRegister, UserModify, UserRemove, UserFind } = require('./../DAO/user');
const { PinRegister, PinModify, PinRemove, PinFind } = require('./../DAO/pin');
/* GET users listing. */

router.get('/', function(req, res) {
   if(PinFind)
});

router.get('/', function(req, res) {
    user.UserRemove(req.body);
    console.log(req.body);
    res.send(200);
});

router.get('/', function(req, res) {
    user.UserRegister(req.body);
    console.log(req.body);
    res.send(200);
});

router.get('/', function(req, res) {
    user.UserModify(req.body);
    console.log(req.body);
    res.send(200);
});
module.exports = router;