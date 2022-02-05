const mongoose = require('mongoose');

const { Schema } = mongoose;
const interestSchema = new Schema({
    interest_id: {
        type: String,
        required: true,
        unique : true,
    },
    count: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Interest', interestSchema);