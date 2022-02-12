const mongoose = require('mongoose');
const PinGroupSchema = require('./../entity/pinGroup');


function PinGroupFindByPinId (PinObjectId) {
    PinGroupSchema.find({id : PinObjectId}, (err, PinGroup_dt) => {
        if(PinGroup_dt.length == 0){
            return undefined;
        }
        return PinGroup_dt;
    })
}

function PinGroupFindByUserId (userId) {
    PinGroupSchema.find({user_id : userId}, (err, PinGroup_dt) => {
        if(PinGroup_dt.length == 0){
            return undefined;
        }
        return PinGroup_dt;
    })
}

function PinGroupAddUser (PinGroup) {
    try {
        PinGroupSchema.create(PinGroup);
        console.log("success create Pingroup");
        console.log(PinGroup);
        return 1;
    }catch (err){
        console.error(err);
        console.log("Pingroup is exist");
        return 0;
    }
}

function PinGroupDeleteByPinId (PinObjectId) {
    try {
        PinGroupSchema.deleteMany({pin_id : PinObjectId});
        console.log("success delete PinGroup");
        console.log(PinObjectId);
        return 1;
    }catch (err){
        console.log("Error PingObjectID can't delete");
        console.error(err);
        return 0;
    }
}

function PinGroupDeleteByUserId (user_id) {
    try{
        PinGroupSchema.deleteOne({user_id : user_id});
        console.log("success delete Pingroup in user");
        console.log(user_id);
        return 1;
    }catch (err){
        console.log("Error userId can't delete");
        console.error(err);
        return 0;
    }
}

module.exports.PinGroupFindByPinId = PinGroupFindByPinId;
module.exports.PinGroupFindByUserId = PinGroupFindByUserId;
module.exports.PinGroupAddUser = PinGroupAddUser;
module.exports.PinGroupDeleteByPinId = PinGroupDeleteByPinId;
module.exports.PinGroupDeleteByUserId = PinGroupDeleteByUserId;