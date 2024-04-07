const mongoose = require("mongoose");
const {Schema} = mongoose;

const PirateSchema = new Schema({
    name: {
        type: String,
        required: [true, "The pirate needs a name"]
    },
    imageUrl: {
        type: String,
        required: [true, "The pirate needs an image URL"]
    },
    numberOfChests: {
        type: Number,
        required: [true, "The pirate needs a number of treasure chests"]
    },
    catchPhrase: {
        type: String
    },
    crewPosition: {
        type: String,
        enum: ['captain', 'firstmate', 'quarter', 'boatswain', 'powder']
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
});

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;

