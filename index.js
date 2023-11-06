// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Require your database configuration to establish a connection
const sequelize = require('./config/database'); // Ensure the path is correct

// Middleware for parsing JSON bodies
app.use(express.json());

// Set up your category routes
const categoryRoutes = require('./routes/categoryRoutes'); // adjust the path if necessary
app.use('/api/categories', categoryRoutes);

// Authenticate with the database
sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Route for the root of your server
app.get('/', (req, res) => res.send('Backend Bazaar is running!'));

// Start your server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));


