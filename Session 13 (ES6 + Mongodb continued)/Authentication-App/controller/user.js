const User = require("../model/user");
const bcrypt = require("bcryptjs"); // This library/package will be used to encrypt the password

const registerUser = async (request, response) => {
    const data = request.body;

    // We are hashing/encrypting password based the data.password string and the salt value 10 which is the utmost encryption
    const encryptPassword = await bcrypt.hash(data.password, 10);

    const newUser = new User({
        name: data.name,
        email: data.email,
        password: encryptPassword
    })

    try {
        const output = await newUser.save();
        return response.status(201).json({
            message: "Succesfully Registered User",
            data: output
        })
    } catch (error) {
        return response.status(500).json({
            message: "There was an error",
            error
        })
    }

}   

const loginUser = async (request, response) => {
    const data = request.body;

    let foundUser = await User.findOne({ email: data.email });

    if (foundUser) {
        // Then we will check for password

        // This will be either true or false
        const matchPassword = await bcrypt.compare(data.password, foundUser.password);

        if (matchPassword) {
            return response.status(200).json({
                message: "User Succesfully Logged In",
                data: foundUser
            })
        } else {
            // User password is incorrect
            return response.status(401).json({
                message: "User Password is incorrect",
                data: null
            })
        }

    } else {

        // If user doesn't exist
        return response.status(404).json({
            message: "User does not exist, please register",
            data: null
        })
    }


}

const getAllUsers = () => {

}

module.exports = {
    registerUser,
    loginUser,
    // getAllUsers
}