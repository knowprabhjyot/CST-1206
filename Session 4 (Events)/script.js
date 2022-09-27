
// WAY 1 Capture that button element in the script
// const button = document.getElementById("click");
// console.log(button);


// Way 2 Capture the button element using the tag
// const button = document.getElementsByTagName("button");
// console.log(button);

// Way 3
// const button = document.querySelector("#click");
// console.log(button);

// Way 4 Query selector gets the first element which is matched
const button1 = document.querySelector("#click");
console.log(button1);

// Query selecter all gets all the elements which match this class
const buttons = document.querySelectorAll(".btn");
console.log(buttons, "All");



// Event handler and listener for button1

button1.addEventListener("click", function() {
    console.log("Fired");
})


// Capture Container element
const container = document.querySelector(".container");
console.log(container);

// Event handler and listener for container element

container.addEventListener("mouseenter", () => {
    console.log("Mouse entered");
})

function mouseLeft() {
    console.log("Mouse Left");
}

container.addEventListener("mouseleave", mouseLeft);

// Go checkout multiple types of events
// https://developer.mozilla.org/en-US/docs/Web/Events