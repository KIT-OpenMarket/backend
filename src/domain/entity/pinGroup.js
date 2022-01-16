const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types :  { ObjectId } } = Schema;
const pinGroupSchema = new Schema({

    pin_id: {
        type: ObjectId,
        required: true,
        ref : ' Pin',
    },
    user_id: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('PinGroup', pingroupSchema);