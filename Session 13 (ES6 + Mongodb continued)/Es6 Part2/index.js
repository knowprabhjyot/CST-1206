// REST Operator ******************************************

function multiply(num1, num2) {
    return num1 * num2;
}

function multiplyWithRest(...nums) {
    let total = 1; // We start with 1
    for (let i = 0 ; i < nums.length; i++) {
       total =   total * nums[i];
    }

    return total;
}

function sumWithRest(...nums) {
    let total = 0;
    for (let i = 0 ; i < nums.length; i++) {
        total =   total + nums[i];
     }
 
     return total;
}

let finalMultipledValue = multiplyWithRest(1,2,3, 4);

let finalSumValue = sumWithRest(1,2,3);

console.log(finalSumValue);
console.log(finalMultipledValue);

function averageSum(type, ...typeList) {
    let length = typeList.length;
    // let total = 0;

    let total = sumWithRest(...typeList);
    // for (let i = 0 ; i < typeList.length; i++) {
    //     total =   total + typeList[i];
    //  }

    let average = total / length;
    console.log(`We are calculating ${type} average and answer is ${average}`);
}

averageSum("Marks", 80, 90, 100);

function greeting(...values) {
    let finalOutput = "";
    for (let i = 0 ; i < values.length; i++) {
        finalOutput =   finalOutput + " " +  values[i];
     }

    console.log(finalOutput);

}

greeting("Hello", "How", "are", "you");


// SPREAD Operator ******************************************

let array1 = [1,2,3,4];

let array2 = [5,6,7];

let combineArrayWithConcat = array1.concat(array2); // First Way

// using spread operator
let combineArrayWithSpread = [...array1, ...array2];

console.log(combineArrayWithSpread);



// Spread operators in Object

let student = {
    name: "Daniel",
    age: 20,
    email: "daniel@gmail.com"
}

let studentWithVCCCollege = {
    ...student,
    college: "VCC",
    name: "Mike"
}

console.log(studentWithVCCCollege);


console.log(Math.max(1,11, 2,3,4)); // this returns the maximum value

let findMaxInArray = [20, 40, 50, 100];

console.log(Math.max(...findMaxInArray)); // this returns the maximum value



// Destructuring ******************************************


// Destructuring in Objects *********

let movieObject = {
    title: "Pirates of the Carrabean",
    actor: "Johny Depp",
    actress: "Amber heard"
}

// Extract value from movie object

let titleMovie = movieObject.title; // One Way

let titleMovie2 = movieObject["title"]; // Second Way

let { title, actor = "Dwayne Johnson" } = movieObject; // Default value will be ignored here!


// Default value here
let { age = 40 } = movieObject;
console.log(title, actor, age);

// Destructuring in Arrays *********

let fruitsList = ["Orange", "Mango", "Papaya", "Grapes"];

// Default value is ignored if the value already exists inside the array
let [ x, Second, third = "Radish", fourth, fifth = "DragonFruit" ] = fruitsList;

console.log(x, Second, third,  fifth);
