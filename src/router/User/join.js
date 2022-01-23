const router = require('express').Router();
const user = require('../../src/domain/user');

// 유저 등록
router.post('/user', (req, res) => {
    let data = req.body.json();
    let id = data.ID;
    let Paasword = data.userPW;
    let phonenum = data.PhoneNum;
    let age = data.age;
    let gender = data.gender;
    let interest = data.interest;

    user.

});