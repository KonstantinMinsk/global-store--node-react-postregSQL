require('dotenv').config();
const express = require('express');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate() // use it to connect to the DB
        await sequelize.sync() // this func will be compare state data with schema data
        app.listen(PORT, function() {
            console.log('Start', PORT);
        })
    } catch (err) {
        console.log(err);
    }
}

start();