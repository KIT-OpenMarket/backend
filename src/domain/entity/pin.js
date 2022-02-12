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
        required : true,
    },
    description : {
        type : String,
        required: true,
    },
    host_id : {
        type : String,
        required : true,
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
        type : Number,
        required : true,
        default: 1,
    },
    modified_date :{
        type : Date,
        default : Date.now,
    },
    create_date : {
        type : Date,
        default : Date.now,
    },
    interest : [
        { type : String}
    ]

});

module.exports = mongoose.model('Pin',pinSchema);