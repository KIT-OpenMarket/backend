const mongoose = require('mongoose');

const { Schema } = mongoose;
const interestSchema = new Schema({
    interest_id: {
        type: String,
        required: true
    },
    count: {
        type: number,
        required: true
    }
});

module.exports = mongoose.model('chattingUser', chattingUserSchema);