const User = require('../models/user.model');



module.exports = {
    register: (req, res) => {
        console.log(req.body);

        const user = new User(req.body);
        user.save()
            .then((newUser) => {
                console.log("Successfully registered")
                console.log(newUser);
                res.json({
                    message: "Welcome!",
                    user: newUser
                })
            })
            .catch((err) => {
                console.log("Please re-register");
                res.status(400).json(err);
            })
    }
}