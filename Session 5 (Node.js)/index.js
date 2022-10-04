// Importing http module from node.js to our project
const http = require("http");
const PORT = 4000;

// Create a server 
const server = http.createServer((request, response) => {
    response.setHeader('Content-type', "text/html");

    if (request.url === "/") {
        // Setting headers to text and html so the browser knows what
        // kind of response i will recieve

        // We are sending a response to the client/browser using response.write
        response.write("<h1>Hello Thankyou for contacting me! </h1>")

        // Ending the response
        response.end();
    }

    if (request.url === "/user") {
        // Setting headers to text and html so the browser knows what
        // kind of response i will recieve

        // We are sending a response to the client/browser using response.write
        response.write("<h1>Hello User! </h1>")

        // Ending the response
        response.end();
    }
})

// Listen a server
server.listen(PORT, () => {
    console.log("My Server is running on port", PORT);
})


