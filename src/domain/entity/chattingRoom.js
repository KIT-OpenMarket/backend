const mongoose = require('mongoose');

const { Schema } = mongoose;
const chattingRoomSchema = new Schema({
    chattingRoom_id: {
        type: Objectid,
        required: true,
    },
    host_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('chattingRoom', chattingRoomSchema);