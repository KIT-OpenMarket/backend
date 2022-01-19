const mongoose = require('mongoose');

const { Schema } = mongoose;
const pinInterestSchema = new Schema({
    pin_id: {
        type: String,
        required: true,
    },
    interest_id: {
        type: Objectid,
        required: true
    }
});

module.exports = mongoose.model('PinInterest', pinInterestSchema);