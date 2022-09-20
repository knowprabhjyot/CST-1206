// Objects

let student = {
    name : "Harinder",
    college : "VCC",
    age : 20,
    hobbies: ["Drinking Water", "Studing"],
    address: {
        city : "Surrey",
        province: "BC"
    },
    study: function () {
        console.log("Harinder likes to study Networks");
    }
}

// Methods inside of console object
// console.log()
// console.error()
// console.table()


// MAPS 
// They are also key value pair and they are inherited from the Objects
// Because when they were made they were made iterable, you can use forEach loop
// The keys inside a map, can also be an object
// Maps they keys are organized

// Map class instance
let map = new Map();



console.log(student.name); // Accessing properties by using dot operator
console.log(student['college']); // VCC

// Difference
var obj = { "abc" : "hello" };
var x = "abc";

// obj.x // Undefined
// obj[x] // "hello"

// Adding key value pairs in object
obj.name = "Prabh";

// Deleting a key from an object
console.log(obj);

delete obj.name;

console.log(obj, "After deleting");

// RUNNING LOOPS ON OBJECTS
// We will be using an interesting loop called as For In loop

for (let key in student) {
    console.log(key); // Keys inside object

    console.log(student.key) // Undefined because it deosn't exist

    console.log(student[key]); // Values inside those keys
}
