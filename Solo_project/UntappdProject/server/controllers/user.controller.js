const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res, next) => {
    const { body } = req;
    try {

        const queriedUser = await User.findOne({ email: body.email });
        
        if (queriedUser) {
            res.status(400).json({ error: "Email is already in use" });
        }
    }  catch (err) {
        res.status(400).json(err);
    }

    const newUser = new User(body);
    try {
        const newUserObj = await newUser.save();
        res.json(newUserObj);
    } catch (err) {
        res.status(400).json(err);
    }
};

const login = async (req, res) => {
    const { body } = req;
    let userQuery;
    try {
        userQuery = await User.findOne({ email: body.email });
    } catch (err) {
        res.status(400).json(err);
    }
    if (userQuery === null) {
        res.status(400).json({ err: "Email not found" });
        return;
    }
    const passwordCheck = bcrypt.compareSync(body.password, userQuery.password);
    if (!passwordCheck) {
        res.status(400).json({ error: "Your credentials do not match" });
        return;
    }
    const userToken = jwt.sign({ id: userQuery._id }, process.env.JWT_SECRET);
    console.log("token:", userToken);
    res.cookie("usertoken", userToken, process.env.JWT_SECRET, {
        httpOnly: true,
        expires: new Date(Date.now() + 9000000),
    })
    .json({ message: "success" });
};

const logout = (req, res) => {
    console.log("logging out");
    res.clearCookie("usertoken");
    res.json({ message: "Thank you for your beer" });
};

module.exports = {
    register,
    login,
    logout,
};