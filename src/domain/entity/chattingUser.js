const mongoose = require('mongoose');

const { Schema } = mongoose;
const chattingUserSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    chattingRoom_id: {
        type: objectid,
        required: true
    }
});

module.exports = mongoose.model('chattingUser', chattingUserSchema);