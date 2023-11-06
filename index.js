// index.js

// Load environment variables from .env file
require('dotenv').config();

// Import necessary Node.js modules
const express = require('express');
const sequelize = require('./config/database'); // assuming you have a sequelize instance exported from this file

// Initialize express app
const app = express();

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Express middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Database authentication check and server start
sequelize.authenticate()
  .then(() => {
    console.log('Database connected!'); // Log successful database connection
    // Sync Sequelize models to the database tables
    sequelize.sync({ force: false }) // 'force: true' would drop & recreate tables
      .then(() => {
        console.log('Database synced!'); // Log successful syncing of models to database tables
        // Start listening on the specified port for incoming requests
        app.listen(PORT, () => {
          console.log(`Server is listening on port ${PORT}`); // Log that the server has started
        });
      })
      .catch((syncError) => {
        console.error('Error during model sync:', syncError); // Log any errors during model syncing
      });
  })
  .catch((authError) => {
    console.error('Unable to connect to the database:', authError); // Log any authentication errors
  });

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Backend Bazaar is running!'); // Respond with a confirmation message
});


