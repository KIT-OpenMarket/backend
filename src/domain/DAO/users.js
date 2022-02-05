const mongoose = require('mongoose');
const UserSchema = require('../entity/user');



module.exports.UserRegister = function(user) {
    UserSchema.create(user, (err) => {
        if (err) {
            console.log(err);
            return 0;
        }
        console.log('user Data Insert Complete');
        console.log(user);
        return 1;
    })
};

module.exports.UserModify = function (user) {
    let query = { user_id : user.user_id };
    UserSchema.updateOne(query, user, (err) => {
        if(err) {
            console.log(err);
            return 0;
        }
        console.log('user Data update Complete');
        console.log(UserSchema.findById(user.user_id));
    })
};

// module.exports.UserRemove = function (user){
//     UserSchema.remove(user, function(err){}.exec())
// }
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.error(err);
// });
//
// module.exports.UserFind = function (user){
//     return  UserSchema.findById(user._id, function(err){}.exec())
// }
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.error(err);
// });





