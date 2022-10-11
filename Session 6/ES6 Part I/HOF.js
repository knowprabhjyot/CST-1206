
// Callback Functions
// When a function is passed as a parameter/argument to another function

function greet(fn) {

    // AS the definition says call me back
    fn();
}


function myName() {
    console.log("Hello prabh");
}

greet(myName); // Hello Prabh

// // For Each Looop

let array = ["P","R","A","B","H"];

// Here Item ---> Array[i], and index ---> i

// array.forEach(function (item, index) {

// })

// array.forEach((item, index) => {
//     console.log(item, "ARRAy[i] Value");
//     console.log(index, "INDEX VALUE");
// })


// Modular Code
function printVAlue(item, index) {
    console.log(item, "ARRAy[i] Value");
    console.log(index, "INDEX VALUE");
}


array.forEach(printVAlue);


