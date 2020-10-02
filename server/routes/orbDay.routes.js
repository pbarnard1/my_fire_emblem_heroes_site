const OrbDayController = require('../controllers/pet.controller');

module.exports = (app) => {
    // app.get('/api', OrbDayController.index); // For testing
    app.get('/api/orbDays',OrbDayController.getAllOrbDays); // List all orbDays
    app.get('/api/orbDays/:id',OrbDayController.getOrbDay); // List one orbDay
    app.post('/api/orbDays', OrbDayController.createOrbDay); // Add new orbDay
    app.put('/api/orbDays/:id',OrbDayController.updateOrbDay); // Update one orbDay
    app.delete('/api/orbDays/:id', OrbDayController.deleteOrbDay); // Delete an orbDay
}