

// This Keyword

// This keyword refers to the current object that's ----> name

var name = "Daniel";

let obj = {
    name: "Prabh",
    getName: function() {
        console.log(this.name);
    }
}

obj.getName();


// Main difference is based on this keyword
var game = "Call Of Duty"
let obj2 = {
    game: "Apex",
    getGame: () => { // By using the arrow function, the reference to this changes to global object
        console.log(this.game);
    }
}

obj2.getGame(); // Call of Duty 


var city = "Montreal";

let student = {
    name: "Daniel",
    college: "VCC",
    city: "Toronto",
    address: {
        city: "Vancouver",
        province: "BC",
        getCity: function() {
            console.log(this.city);
        }           
    }
}

student.address.getCity(); // Vancouver (BECAUSE WE ARE USING FUNCTION KEYWORD)

let student2 = {
    name: "Daniel",
    college: "VCC",
    city: "Toronto",
    address: {
        city: "Vancouver",
        province: "BC",
        getCity: () => {
            console.log(this.city);
        }           
    }
}

student2.address.getCity(); // Montreal (BECAUSE WE ARE USING Arrow Functions)




// HOISTING ****************************************

// HOISTING IN VAR KEYWORDS

console.log(collegeName); // Undefined

var collegeName = "VCC";

// -------- The above representation will be written by parser as below and that's
// why it is undefined

var collegeName;

console.log(collegeName); // Undefined

collegeName = "VCC";


// HOISTING IN FUNCTION KEYWORD


getMyName(); // Hey I am Prabh

function getMyName() {
    console.log("Hey I am Prabh");
}

// ---------------------- The above representation will be written by parser as below and that's

function getMyName() {
    console.log("Hey I am Prabh");
}

getMyName(); // Hey I am Prabh



// HOISTING IN LET AND CONST KEYWORD
 
console.log(country); // Reference Error
let country = "Canada"
