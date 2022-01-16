const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types :  { ObjectId } } = Schema;
const evaluationSchema = new Schema({

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

module.exports = mongoose.model('Evaluation', evaluationSchema);