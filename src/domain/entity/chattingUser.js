const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types :  { ObjectId } } = Schema;
const chattingUserSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        ref : 'users',
    },
    chattingRoom_id: {
        type: ObjectId,
        required: true,
    }
});

module.exports = mongoose.model('ChattingUser', chattingUserSchema);