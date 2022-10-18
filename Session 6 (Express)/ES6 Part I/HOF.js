
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

// **************************************

// MAP FUNCTION

let numArray = [1,2,3,4,5];

let newArray = numArray.map(function(item, index) {
   return item * 2
})

console.log(numArray, "ORIGNAL ARRAY");
console.log(newArray, "NEW ARRAY");

// NOTE - WHEN YOU ARE USING THE MAP FUNCTION, The length of the array remains the same

// Example 2

// We want to change these values to either  "PASS" OR "FAIL"

let studentMathMarks = [
    {
        name: "Daniel",
        rollNumber: 100,
        grade: 90
    },
    {
        name: "Angel",
        rollNumber: 101,
        grade: 40
    },
    {
        name: "Daniel",
        rollNumber: 103,
        grade: 70
    }
]

let modifiedArray = studentMathMarks.map((student) => {
    if (student.grade > 50) {
        student.grade = "PASS"
    } else {
        student.grade = "FAIL"
    }

    return student;
})

console.log(modifiedArray);


// **************************************

// FILTER FUNCTION

let num2array = [1,2,3,4,5,6];

let new2Array = num2array.filter((num) => {
    if (num % 2 === 0) {
        return true;
    }
})


console.log(num2array, "ORIGNAL ARRAY");
console.log(new2Array, "NEW ARRAY");


let passedStudents = modifiedArray.filter(function(student) {
    if (student.grade === "PASS") {
        return true;
    }
})

let failedStudents = modifiedArray.filter((student) => student.grade === "FAIL" ? true : false )

console.log(failedStudents);


// **************************************

// REDUCE FUNCTION

let sum = 0;
let array1 = [1,20,3,4,5];
for (let i = 0 ; i < array1.length ; i++) {
    sum = sum + array1[i]
}

console.log(sum);

// let sumOfArray = array1.reduce((accumulator, currentValue) => {

// }, initialValue)


// accumulator ---> sum
// currentValue ---> array1[i]
// initialValue ---> 0

let sumOfArray = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(sumOfArray);



// Maximum inside the array
// You can use for loop
let max = -Infinity;
for (let i = 0 ; i< array1.length; i++) {
    if (array1[i] > max) {
        max = array1[i];
    }
}

console.log(max);


// You can reduce just like the above example
let maxValue = array1.reduce((accumulator, currentValue) => {
   return accumulator >  currentValue ? accumulator : currentValue
}, -Infinity)

console.log(maxValue);




// **************************************

// FOR IN LOOP

let obj = {
    name:  "Prabh",
    age: 28,
    college: "VCC",
    city: "Vancouver",
}


for (let key in obj) {
    console.log(obj[key]);
    // console.log(obj.key) We cannot do this since we are searching for "Key" and that doens't exist inside the obejct
}



// **************************************

// FIND FUNCTION


let numericArray = [5, 3, 4, 23, 11, 2];

const foundValue = numericArray.find((num) => {
    if (num === 23) {
        return true;
    }
})

const foundValue2 = numericArray.find((num) => {
    if (num === 100) {
        return true;
    }
})

console.log(foundValue, "FOUND VALUE");
console.log(foundValue2, "FOUND VALUE");



const articles = [
    {
        id: Math.random().toFixed(2),
        title: "Latest Technogies",
        author: "Prabh",
        timeRequired: "2 minutes",
        description: "This is an article for latest technologies for example - BlockChain, IOT"
    },
    {
        id: Math.random().toFixed(2),
        title: "Life in Vancouver",
        author: "Prabh",
        timeRequired: "1 minutes",
        description: "Vancouver is known for its natural beauty and its fun living here!"
    }
]

const findArticle = articles.find((item) => {
    if (item.title === "Life in Vancouver") {
        return true;
    }
})


const findArticleByTime = articles.find((item) => {
    if (item.timeRequired === "2 minutes") {
        return true;
    }
})



console.log(findArticle, "FOUND VALUE");
console.log(findArticleByTime, "FOUND VALUE BY TIME REQUIRED");



// **************************************

// FIND INDEX FUNCTION
const index = articles.findIndex((article) => {
    if (article.title === "Life in Vancouver") {
        return true;
    }
})

console.log(index, "INdex value found");


// **************************************

// SPLICE FUNCTION - Splice method can be used to either add elements or delete elements from the array

let numA = [1,2,3,4,5];

// Array.splice(starting Index, Number of elements of you want to delete, items you want to add);

numA.splice(0, 2, 20, 40, 60);

console.log(numA);