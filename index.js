// Load .env file to process so we can access environment variables
require('dotenv').config();

// Import the express package which is used to create our HTTP server
const express = require('express');

// Import Sequelize configured instance to use for database operations
const sequelize = require('./config/database'); // Adjust the path as necessary for your project

// Create an instance of express which is our server
const app = express();

// Define a port number from the environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Setup a response for the root route to check if our server is running
app.get('/', (req, res) => {
  // Send a response when this route is accessed
  res.send('Welcome to Backend Bazaar!');
});

// Connect to our database using Sequelize
sequelize.authenticate()
  .then(() => {
    // If connection is successful, log the success message
    console.log('Connection has been established successfully.');

    // Start the server and listen on the defined PORT
    app.listen(PORT, () => {
      // Log the message to the console after the server starts listening
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    // If there is any error connecting to the database, log the error
    console.error('Unable to connect to the database:', err);
  });

