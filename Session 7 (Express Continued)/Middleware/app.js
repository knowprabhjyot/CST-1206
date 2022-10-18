const express = require("express");
const app = express();
const PORT = 4000;
const path = require('path');


// const logger = (req, res, next) => {
//     console.log("I am inside this middleware!");
//     next();
// }

// // App.use is used to implement middlewares
// app.use(logger); 



// app.use(express.static(path.join(__dirname, "public")))

// This is how you serve static html files from the server
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})