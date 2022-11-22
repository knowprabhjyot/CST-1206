const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const userRoutes=  require("./routes/user");


// We are using this so that we can use .env file,. beacuse we want certain data to be confidential
require('dotenv').config();


// Parsing incoming values
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.log("There was an error", error);
    } else {
        console.log("Database Succesfully Connected");
    }
})

app.get('/', (request, response) => {
    return response.send("Endpoints are here!");
})

// We will use middleware
app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})