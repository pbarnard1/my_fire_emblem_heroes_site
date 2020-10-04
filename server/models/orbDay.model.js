const mongoose = require('mongoose');
const OrbDaySchema = new mongoose.Schema({
    // Orb date on calendar
    date: {
        type: Date,
        required: [true, "Date must be specified"], // Required with message stating so if validation fails
    },
    orbValues: {
        type: Map,
        of: Array, // Key-value pairs: name: [numberOfOrbs, "number - explanation; number - explanation"] 
    },
    totalOrbs: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

module.exports.OrbDay = mongoose.model('OrbDay', OrbDaySchema);

// PROPOSED CHANGE:
// Instead of columns for each day, organize by group type (e.g. story chapters, chain challenges)
// [Name of event (in strings), # for day 1, # for day 2, etc.]