const express = require('express');
const router = express.Router();
const userDAO = require('./../../domain/DAO/users');
const url = require('url');

/* GET users listing. */
router.post('/user/join', function(req, res, next) {
    let temp = userDAO.UserRegister(req.body);
    if(temp == 0){
        res.send("err");
        return;
    }
    console.log(req.body);
    res.send(200);
});

router.get('/user/join/:id', function(req, res){
    let userId = req.params.id;
    let temp = userDAO.UserFindById(userId);
    if(temp === undefined){
        return res.send(200);
    }
    return res.send('Exist same userID');
})


module.exports = router;