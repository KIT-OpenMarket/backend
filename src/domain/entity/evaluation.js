const mongoose = require('mongoose');

const { Schema } = mongoose;
const evaluationSchema = new Schema({
    evaluation_id: {
        type: Objectid,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    target_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('evaluation', evaluationSchema);