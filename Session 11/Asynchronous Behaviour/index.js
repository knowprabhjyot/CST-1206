
// This is synchronous behaviour
console.log(1);
console.log(2);
console.log(3);


// Asynchronous behaviour
// First example

function greetMe() {
    console.log('Hi Prabh!');
}

greetMe();

// What if i want to execute greetMe function after the given delay
// setTimeout

setTimeout(function() {
    console.log("Print me after 1 second");
}, 1000);


// We can make use of the a callback and a pass a function here!
setTimeout(greetMe, 2000);

// 2000 is in miliseconds --> 2 seconds

// setInterval
// Set interval is a feature of browser, which executes after the given delay everytime


setInterval(function() {
    console.log("hi");
}, 2000);


setInterval(greetMe, 4000);

// In the above example, hi will be printed multiple times after 2 second delay


setInterval(() => {
    console.log("Hi I am being printed");
}, 1000);


// How we can stop the timer
let timer = setInterval(() => {
    console.log("Hi I am being printed");
}, 1000); // 1000 milli second ---> 1 second

setTimeout(() => {
    clearInterval(timer);
    console.log("Interval is terminated now");
}, 5000);


// NOTE : Settimeout and SetInterval are not features of Javascript, 
// these are features of your browser



// EVENT LOOPS!


console.log(1);

setTimeout(() => {
    console.log(2);
}, 1000);

console.log(3);

setTimeout(() => {
    console.log(4);
}, 0);

console.log(5);



// STACK is a datastructure which works on the concept of 
// FILO (First in last out), or LIFO (Last in first out)



setTimeout(() => {
    console.log(1);
}, 0);

setTimeout(() => {
    console.log(2);

}, 0);

setTimeout(() => {
    console.log(3);

}, 0);

setTimeout(() => {
    console.log(4);

}, 0);

console.log(5);


// 5 1 2 3 4



// CALLBACKS

// Callbacks mean as the function say
// call me back whenever you want

// callbcks are the functions which are passed as a parameter,
//  and they can be called whenevr you want


function a(callback) {
    callback();
}

function greeting() {
    console.log("Hello");
}

a(greeting);



// PROMISES ***********************

let promise = new Promise(function(resolve, reject) {
                    
}); // PENDING STATE


let promise2= new Promise(function(resolve, reject) {
    resolve("I am resolved")              
}); // FULFILLED STATE


let promise3 = new Promise(function(resolve, reject) {
      reject("I am rejected");                   
}); // REJECTED STATE


// lets try to use .then() block

let promise4 = new Promise(function(resolve, reject) {
    resolve("Hi I am resolved");
});


// SO what to do with the resolved promise goes inside the then block
promise4.then((response) => {
    console.log(response);
})

// // lets try to use .catch() block

// let promise5 = new Promise(function(resolve, reject) {
//     reject("Hi I am rejected");
// });

// promise5.then((response) => {
//     console.log("INSIDE THEN BLOCK" + response);
// }).catch((error) => {
//         console.log("INSIDE CATCH BLOCK" + error);
// })


// ANOTHER EXAMPLE

// let number = 20;

// let promise6 = new Promise((resolve, reject) => {

//     if (number % 2 === 0) {
//         resolve("Number is divisible by 2");
//     } else {
//         reject("Number is not divisible by 2");
//     }
    
// });

// promise6.then((response) => {
//     console.log("Inside then block (MEANING RESOLVED)" + response);
// }).catch((error) => {
//        console.log("Inside catch block (MEANING REJECTED)" + error);
// })


// let number2 = 20;



// let promise7 = new Promise((resolve, reject) => {

//     resolve(number2);
    
// });


// PROMISE CHAIN
// promise7
//   .then((response) => {
//     return response * 2;
//   })
//   .then((response2) => {
//     return response2 * 2;
//   })
//   .then((finalResponse) => {
//     console.log(finalResponse);
//   })

//   .catch((error) => {
//     console.log(error);
//   });


// How you will use promise in real life



/// ASYNC AWAIT

// You have to write async before function
async function callNumber() {
    let output =  await getNumber(); // here it won't go to the next line until it executes the await keyword
       console.log(output);
       console.log(20000);

}

// FETCH Is a feature of browser (WEB API"S)

function callAPI() {

}