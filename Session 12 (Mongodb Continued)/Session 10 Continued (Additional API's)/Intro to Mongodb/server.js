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

// // FIND USER BY ID FOR GIVEN ID
// 
app.get("/users/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const foundUser = await User.findById(id); 

        // It goes to the database waits for the database to give the response


        // Then Javascript resumes to next line

        if (foundUser) {
            // 200 means success response
            return res.status(200).json({
                message: "Found user for given ID",
                data: foundUser
            })
        } else {
            // status code 404 means resource not found
            return res.status(404).json({
                message: "User not found for the given ID",
                data: null
            })
        }
        
    } catch (error) {
        // Status Code 500 means something is wrong in the database
        return res.status(500).json({
            message: "Something went Wrong!",
            error
        })
    }
     
})


// FIND ONE based on given parameters *****************************

// // :email means dynamic email here
app.get("/users/field/:email", async (req, res) => {
    const email = req.params.email;

    try {
        const foundUser = await User.findOne({ email });
        console.log(foundUser, "found");

        if (foundUser) {
            // 200 means success response
            return res.status(200).json({
                message: "Found user for given Email",
                data: foundUser
            })
        } else {
            // status code 404 means resource not found
            return res.status(404).json({
                message: "User not found for the given Email",
                data: null
            })
        }
        
    } catch (error) {
        // Status Code 500 means something is wrong in the database
        return res.status(500).json({
            message: "Something went Wrong!",
            error
        })
    }
     
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


// Find a user and update its value based on the given ID
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const updatedBody = req.body;

        User.findOneAndUpdate({ _id: id}, updatedBody, { returnOrignal: false} ).then((data) => {
            return res.status(200).json({
                message: "User Succesfully Updated",
                data
            })
        }).catch((error) => {
            return res.status(500).json({
                error,
                message: "Something went wrong while updating"
            })
        })

      
     
})

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

        User.findByIdAndDelete(id).then((data) => {
            return res.status(200).json({
                message: "User Succesfully Deleted",
                data
            })
        }).catch((error) => {
            return res.status(500).json({
                error,
                message: "Something went wrong while deleting"
            })
        })

})


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})
