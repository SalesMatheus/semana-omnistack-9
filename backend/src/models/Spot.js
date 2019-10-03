const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thunbnaill: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);