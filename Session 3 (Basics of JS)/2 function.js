
// FIRST WAY **************** function keyword
function sum (a, b) {
    return a + b;
}

// // SECOND WAY **************** Arrow functions

// const sum = (a, b) => {
//     return a + b;
// }

// Arrow functions 2
// const sum = (a, b) => a + b;



// Hoisting in functions

console.log(multiply(3, 4)); // 12

// Declaration is moved to the top of the scope
function multiply (a, b) {
    return a * b;
}

// This will give an array, meaning that it is not
// able to access before initialization
console.log(division(4, 2));

const division = (a, b) => {
    return a / b;
}

// With Arrow functions we cannot do hoisting

// This is also function expression and it will also not hoist
const divide = function() {
    return 10 / 5;
}