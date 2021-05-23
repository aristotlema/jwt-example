const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

//Create Account
router.post('/', async (req, res) => {
    const { userName, passWord } = req.body;
    try {
        const user = await User.create({ userName: userName, passWord: passWord });
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

//Login
router.post('/login', async (req, res) => {
    const user = await User.findOne({ 
        where: {
            userName: req.body.userName
        }
    });
    if(user == null) {
        return res.status(400).json({ message: "No user was found with that User Name" });
    }
    try {
        if(user.passWord === req.body.passWord) {
            res.send('Success');
        } else {
            res.send('Incorrect User Name and Password');
        }
    } catch {
        res.status(500).send();
    }
});

module.exports = router;