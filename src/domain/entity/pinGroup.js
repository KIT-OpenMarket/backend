const mongoose = require('mongoose');

const { Schema } = mongoose;
const pinGroupSchema = new Schema({
    pinGroup_id: {
        type: objectid,
        required: true,
    },
    pin_id: {
        type: objectid,
        required: true
    },
    user_id: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('pinGroup', pingroupSchema);