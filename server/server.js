const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userRouter = require('./routes/userRoutes');
app.use('/user', userRouter);

app.listen(4000, async () => {
    console.log('Server is running on port 4000');
    try {
        await sequelize.authenticate();
        console.log('Database Connected Succesfully');
    } catch (err) {
        console.error('Connection to Databse Failed', err);
    }
});