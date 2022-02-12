const express = require('express');
const router = express.Router();
const userDAO = require('./../../domain/DAO/users');
/* GET users listing. */
router.post('/user/login', function(req, res) {
    if(userDAO.UserFindById(req.body).user_id != req.body.user_id ){
       return res.send('error');
    }
    else if(userDAO.UserFind(req.body).password != req.body.password){
        return res.send("error");
    }
    else {
        res.send(200);
    }
    console.log('userFindLogin : ', req.body);
});
module.exports = router;