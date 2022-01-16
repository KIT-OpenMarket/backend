const mongoose = require('mongoose');
const { Types :  { ObjectId } } = Schema;
const { Schema } = mongoose;
const pinInterestSchema = new Schema({
    pin_id: {
        type: String,
        required: true,
    },
    interest_id: {
        type: ObjectId,
        required: true,
        ref : 'Interest'
    }

});

module.exports = mongoose.model('PinInterest', pinInterestSchema);