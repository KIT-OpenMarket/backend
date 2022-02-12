const mongoose = require('mongoose');
const UserSchema = require('../entity/user');
const {first} = require("nunjucks/src/filters");
const Module = require("module");
const {handleError} = require("nunjucks/src/runtime");



function UserRegister(user) {
    try {
        UserSchema.create(user);

        console.log('user Data Insert Complete');
        console.log(user);
        return 1;
    }catch (err){
        console.error(err);
        return 0;
    }
};

 function UserModify (user) {
    const query = { id : user.id };
    try {
        user.modified_date = Date.now;
        UserSchema.updateOne(query, user);

        console.log('user Data update Complete');
        console.log(UserSchema.findById(user.id));
        return 1;
    } catch (err){
        console.error(err);
        return 0;
    }
};

 function UserRemove (user){
    try {
        UserSchema.remove({id: user.id});
        console.log('user Data delete complete');
        console.log('delete ID : ', user.user_id);
        return 1;
    }catch (err){
        console.error(err);
        return 0;
    }
}

function UserFindById(user){
    UserSchema.findOne({ id : user.id} , (err, user_dt) =>{
        if(user_dt.length == 0){
            return undefined;
        }else {
            return user_dt;
        }
    });
};

function UserInterestById (user){
    return UserFindById(user).interest;
}



module.exports.UserRegister = UserRegister;
module.exports.UserModify = UserModify;
module.exports.UserRemove = UserRemove;
module.exports.UserFindById = UserFindById;
module.exports.UserInterestById = UserInterestById;