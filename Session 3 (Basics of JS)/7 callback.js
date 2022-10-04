
// function greet() {
//     console.log("Hello Prabh");
// }

// const greet = () => {
//     console.log("Hello Prabh");
// }

// Callbacks - Call me back whenever you are ready
// When a function is passed as a paramter to other function so that it,
// can be called later on

function sayHi(callback) {
    callback();
}

sayHi(() => {
    console.log("Hello Prabh");
});