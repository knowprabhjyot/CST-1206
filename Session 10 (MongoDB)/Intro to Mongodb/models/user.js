const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
        }
    }
)

const User = mongoose.model("User", UserSchema);

// Here we are using ES5
module.exports = User;