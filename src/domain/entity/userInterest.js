const mongoose = require('mongoose');

const { Schema } = mongoose;
const userInterestSchema = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    interest_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserInterest', userInterestSchema);