const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    console.log(req.cookies);
    console.log("key", process.env.JWT_SECRET)
    jwt.verify(req.cookies.usertoken, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            console.log("user is authenticated");
            next();
        }
    });
};

module.exports = {
    authenticate
};
