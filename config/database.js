const Sequelize = require('sequelize');
require('dotenv').config(); // This makes sure we can use environment variables

// Set up the config using the variables from .env file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost', // This is the default host for MySQL
  dialect: 'mysql', // We are using MySQL database
  port: 3306, // This is the default port for MySQL
  logging: false, // This option disables the SQL logging in the console
  define: {
    timestamps: false // This option disables the automatic 'createdAt' and 'updatedAt' fields
  },
  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000 // The maximum time, in milliseconds, that a connection can be idle before being released
  },
});

module.exports = sequelize; // Exporting the connection to use it in other parts of the application
