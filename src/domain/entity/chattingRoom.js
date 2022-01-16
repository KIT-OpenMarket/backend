const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types :  { ObjectId } } = Schema;

const chattingRoomSchema = new Schema({

    interest_id: {
        type: String,
        required: true,
        ref : 'Interest'
    }
});

module.exports = mongoose.model('ChattingRoom', chattingRoomSchema);