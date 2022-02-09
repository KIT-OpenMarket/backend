const mongoose = require('mongoose');
const UserInterestSchema = require('../entity/UserInterest');



module.exports.UserInterestRegister = function(UserInterest) {
    UserInterestSchema.create(UserInterest, (err) => {
        if (err) {
            console.log(err);
            return 0;
        }
        console.log('UserInterest Data Insert Complete');
        console.log(UserInterest);
        return 1;
    })
};

module.exports.UserInterestModify = function (UserInterest) {
    let query = { UserInterest_id : UserInterest._id };
    UserInterestSchema.updateOne(query, UserInterest, (err) => {
        if(err) {
            console.log(err);
            return 0;
        }
        console.log('UserInterest Data update Complete');
        console.log(UserInterestSchema.findById(UserInterest.UserInterest_id));
    })
};

module.exports.UserInterestRemoveWithUserId = function (UserInterest){
    UserInterestSchema.remove({UserInterest_id : UserInterest.user_id}, (err) => {
        if(err){
            console.log(err);
            return 0;
        }
        console.log('UserInterest Data delete complete');
        console.log('delete ID : ', UserInterest.UserInterest_id);
    });
}

module.exports.UserInterestRemoveWithInterest_id = function (UserInterest){
    UserInterestSchema.remove({UserInterest_id : UserInterest.interest_id}, (err) => {
        if(err){
            console.log(err);
            return 0;
        }
        console.log('UserInterest Data delete complete');
        console.log('delete ID : ', UserInterest.UserInterest_id);
    });
}

module.exports.UserInterestFind = function (UserInterest){
    return  UserInterestSchema.findById(UserInterest.UserInterest_id, (err) =>{
        if(err) {
            console.log(err)
            return 0;
        }
    });
};





