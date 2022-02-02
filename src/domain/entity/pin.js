const mongoose = require('mongoose');

const {Schema } = mongoose;
const { Types :  { ObjectId } } = Schema;
const pinSchema = new Schema ( {
    latitude : {
        type : Number,
        required : true,
    },
    longitude : {
        type : Number,
        required : true,
    },
    title : {
        type : String,
        requried : true,
    },
    description : {
        type : String,
        requried: true,
    },
    host_id : {
        type : String,
        requried : true,
        ref : 'User',
    },
    deadline : {
        type : Date,
        required : true,
    },
    max_user : {
        type : Number,
        required : true,
        default : 999,
    },
    now_user : {
        type : number,
        required : true,
        default: 1,
    },
    modified_date : {
        type : Date,
    },
    create_date : {
        type : Date,
        default : Date.now,
    },
});

module.exports = mongoose.model('Pin',pinSchema);