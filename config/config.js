require('dotenv').config(); // This line will load the environment variables from the .env file.

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  
};
