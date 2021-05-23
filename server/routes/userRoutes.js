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

module.exports = router;