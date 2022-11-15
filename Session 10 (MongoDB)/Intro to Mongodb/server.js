const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
require('dotenv').config();

// User Model coming from models
const User = require("./models/user");

// So we can accept json information
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.error(`There was an error : ${error}` );
    } else {
        console.log("Connected to the database");
    }
})

app.get("/", (req, res) => {
    res.send("USER ENDPOINTS!");
})

app.get("/users", (req, res) => {
    // returns async response ; // This returns a promise
    // then is waiting for the response
    // User helps me get hold of information from mongodb atlas server
    User.find().then((data) => {
        return res.status(200).json({
            message: "Succesfully fetched the user",
            data
        }); 
    }).catch((error) => {
        return res.status(404).json({
            message: "Error",
            error
        }); 
    })
})

app.post("/users", async (req, res) => {
    let newUser = {
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       phoneNumber: req.body.phoneNumber
    }

    // We are making an instance of User Model
    const user = new User(newUser);

    // Save method helps you save data in database
    // user.save().then((data) => {
    //     return res.status(201).json({
    //         message: "User succesfully created",
    //         data
    //     })
    // })

    try {

    let response = await  user.save();
    return res.status(201).json({
            message: "User succesfully created",
            response
        })
    } catch( error) {
        res.status(500).json({
            message: "Error creating user",
            error
        })
    }


})

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})
