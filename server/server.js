const express = require('express');
const cors = require('cors'); // Allows for communication between different ports
const app = express();
require('./server/config/mongoose.config');
const port = 8000;

app.use(cors());

// For handling post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/orbDay.routes')(app); // Add other routes for other models here
app.listen(port, () => console.log(`Listening on port: ${port}`) );