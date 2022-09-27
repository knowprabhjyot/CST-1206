
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

// button1.addEventListener("click", function() {
//     console.log("Fired");
// })


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



// Capture img element

const image = document.querySelector("img");



const orignalImage = image.src;

// We can also do some operations like changing image using a button event
button1.addEventListener("click", function() {
    image.src = "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg"
})



// IF YOU WANT TO TOGGLE OR DO SOME FUNCTIONALITY YOU CAN USE THIS LOGIC AS WELL
let toggleMe = true;
let newImage = "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg"

// We can also do some operations like changing image using a button event
button1.addEventListener("click", function() {
    if (toggleMe) {
        image.src = newImage;
        toggleMe = false;
    } else {
        image.src = orignalImage;
        toggleMe = true;
    }
})

// Adding classes dynamically to elements using javascript

const changeColorButton = document.querySelector("#changeColor");
changeColorButton.addEventListener("click", () => {
    container.classList.add("green");
})

const displayNone = document.querySelector("#displayNone");

displayNone.addEventListener("click", () => {
    container.classList.remove("green");

    // This is setTimeout used for firing a function after some given delay
    setTimeout(() => {
        container.classList.add("hidden");
    }, 2000);
})


