var express = require('express');
var router = express.Router();
const { UserRegister} = require('./../../domain/DAO/users');

/* GET users listing. */
router.post('/userRegister', function(req, res, next) {
    UserRegister(req.body);
    console.log(req.body);
    res.send(200);
    next();
});


module.exports = router;