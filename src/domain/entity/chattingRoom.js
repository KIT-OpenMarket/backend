const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types :  { ObjectId } } = Schema;

const chattingRoomSchema = new Schema({

    interest_id: {
        type: String,
        required: true,
        ref : 'Interest'
    },

    host_id: {
        type : String,
        required : true,
        ref : 'users',
    },
    chatting_user: [{
        type : String,
        ref: 'users',
    }],
});

module.exports = mongoose.model('ChattingRoom', chattingRoomSchema);