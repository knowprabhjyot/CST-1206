const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const AuthorRoutes = require("./routes/Author");
const BookRoutes = require("./routes/Book");
const cors = require("cors");

require('dotenv').config();

// So we can accept json information
app.use(express.json());

// CORS --> CROSS ORIGIN RESOURCE SHARING
// So we have to use cors, because our browser/client application is running on 5500 port
// And server is running on 3000 port
// Browser doesn't allow that, so we have to use a package called as cors to allow access
app.use(cors());



mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.error(`There was an error : ${error}` );
    } else {
        console.log("Connected to the database");
    }
})

// app.get("/", (req, res) => {
//     return res.send("ENDPOINTS!");
// })


// MIddleware to run static files
app.use(express.static("public"));

// I will use a middleware to segregate my business logic to controllers
// ROutes --> to routes folder
app.use('/api/v1/authors', AuthorRoutes);
app.use('/api/v1/books', BookRoutes);


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})
