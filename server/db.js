const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // Name of the database DB
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // Password
    {
        dialect: 'postgres', // postgres || MySQL
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)