const mongoose = require('mongoose');
const BeerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of beer is required"],
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required"]
    },
    style: {
        type: String,
        required: [true, "Style of beer is required"]
    },
    brewery: {
        type: String,
        required: [true, "Brewery is required"]
    },
    description: {
        type: String,
        required: [true, "Description of the beer is required"]
    },
}, {timestamps: true});

module.exports = mongoose.model('Beer', BeerSchema);