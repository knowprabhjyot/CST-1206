
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