var express = require('express');
var router = express.Router();
const { UserFindLogin } = require('./../../domain/DAO/users');
/* GET users listing. */
router.post('/userFindLogin', function(req, res) {
    if(UserFindLogin(req.body).id !== req.body.id ){
        res.send('error');
    }
    else if(UserFind(req.body).password === req.body.password){
        res.send(200);
    }
    else {
        res.send('error');
    }
    console.log(req.body);
});
module.exports = router;