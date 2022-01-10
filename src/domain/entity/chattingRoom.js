const mongoose = require('mongoose');

const { Schema } = mongoose;
const chattingRoomSchema = new Schema({
    chattingRoom_id: {
        type: objectid,
        required: true,
    },
    interest_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('chattingRoom', chattingRoomSchema);