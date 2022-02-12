const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema( {
    id: {
        type : String,
        required: true,
        unique : true,
    },
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    sex : {
        type : String,
        required : true,
    },
    nickname : {
        type : String,
        required : true,
    },
    phone_num : {
        type : String,
        required : true,
    },
    modified_date : {
        type : Date,
        default : Date.now,
    },
    created_date : {
        type : Date,
        default : Date.now,
    },
    interest : [String],
    status : {  // 0 은 아무상태 아님, 1은 블랙리스트, 2는 비밀번호 갱신 상태 3은 회원탈퇴
        type : Number,
        default : 0,
    },
});
userSchema.index({user_id : 1});
module.exports = mongoose.model('User', userSchema);