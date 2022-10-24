const express = require('express');
const UserModel = require('../models/user');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(201).json({ message: 'New User Created', status: true });
    } catch (e) {
    res.status(409).json({ message: e });
    }
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await UserModel.findOne({ username: username, password: password,});
    if (!user) {
    return res
    .status(404)
    .json({ message: 'Wrong Username Or Password', status: false });
    }
    return res.status(200).json({
    message: `${user.username} Logged In`,
    status: true,
    });
});
module.exports = router;