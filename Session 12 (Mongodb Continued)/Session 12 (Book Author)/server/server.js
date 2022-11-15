const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const AuthorRoutes = require("./routes/Author");
const BookRoutes = require("./routes/Book");

require('dotenv').config();

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
    return res.send("ENDPOINTS!");
})


// I will use a middleware to segregate my business logic to controllers
// ROutes --> to routes folder
app.use('/api/v1/authors', AuthorRoutes);
app.use('/api/v1/books', BookRoutes);


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})
