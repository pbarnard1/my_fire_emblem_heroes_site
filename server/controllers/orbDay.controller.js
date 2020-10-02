const { OrbDay } = require('../models/orbDay.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}
/*
module.exports.createOrbDay = (request, response) => {
    // Change field names below as necessary
    const { name, orbDayType : type, description, skills } = request.body; // Redirected orbDayType variable to simply type
    OrbDay.create({
        name,
        type,
        description,
        skills
    })
        .then(orbDay => response.json(orbDay))
        .catch(err => {
            console.log(err);
            response.status(400).json(err);
        });
}

module.exports.getAllOrbDays = (request, response) => {
    // Sort by type in alphabetical order
    OrbDay.find({}).collation({locale: 'en'}).sort({type: 'asc'})
        .then(orbDays => response.json(orbDays))
        .catch(err => response.status(400).json(err));
}

module.exports.getOrbDay = (request, response) => {
    OrbDay.findOne({_id:request.params.id})
        .then(orbDay => response.json(orbDay))
        .catch(err => response.status(400).json(err))
}

// I've removed the validations on the update because it turns out I had a bug with editing the name.
module.exports.updateOrbDay = (request, response) => {
    const { name, orbDayType : type, description, skills } = request.body; // Redirected orbDayType variable to simply type
    OrbDay.findOneAndUpdate({_id: request.params.id}, {
            name,
            type,
            description,
            skills
        }, {new:true}) // Removed: runValidators:true
        .then(updatedOrbDay => response.json(updatedOrbDay))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteOrbDay = (request, response) => {
    OrbDay.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

module.exports.updateLikes = (request, response) => {
    const { likes } = request.body; // Just update like value only
    OrbDay.findOneAndUpdate({_id: request.params.id}, {
            likes
        }, {new:true})
        .then(updatedOrbDay => response.json(updatedOrbDay))
        .catch(err => response.status(400).json(err))
}
*/