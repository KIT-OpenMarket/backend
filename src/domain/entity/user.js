cosnt  mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema( {
    user_id: {
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
    modified_date : Date,
    created_date : {
        type : Date,
        default : Date.now,
    },
    Status {
        type : Number,
        default : 0,
    },
});

module.exports = mongoose.model('User', userSchema);