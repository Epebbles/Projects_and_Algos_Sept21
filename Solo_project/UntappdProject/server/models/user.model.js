const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,  "Name is required"],
    },

    username: {
        type: String,
        required: [true, "You must make a Username"],
    },

    email: {
        type: String,
        required: [true, "Email is required"],
    },

    password: {
        type: String,
        required: [true, "You must enter a password"],
        minlength: [8, "Password must be at least 8 characters"],
    },
}, {timestamps: true});

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

UserSchema.pre("validate", function(next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match!");
    }
    next();
});

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 12)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        })
        .catch((err) => {
            console.log("Could not hash password")
        });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;