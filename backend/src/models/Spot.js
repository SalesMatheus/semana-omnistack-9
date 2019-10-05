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
}, {
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thunbnaill_url').get(function () {
    return `http://localhost:3001/files/${this.thunbnaill}`
})

module.exports = mongoose.model('Spot', SpotSchema);