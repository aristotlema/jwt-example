const express = require('express');
const app = express();
const { sequelize } = require('./models');

app.listen(4001, async () => {
    console.log('Server is running on port 4000');
    try {
        await sequelize.authenticate();
        console.log('Database Connected Succesfully');
    } catch (err) {
        console.error('Connection to Databse Failed', err);
    }
});