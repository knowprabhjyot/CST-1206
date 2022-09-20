
// for loops are used to iterate over strings, arrays (Iterable datatypes)
let array = [1,2,3,4];

for (let i = 0 ; i < array.length ; i++) {
    console.log(i, "Indexes");
    console.log(array[i], "Values at those index");
}

// While loops

let num = 10;
let counter = 0;
while (counter < num) {
    console.log(counter);
    counter ++;
}

// Do while 
let count = 0;
let n = 10;
do {
    console.log(count);
} while (count < n);

// For Each Loop
let arr = [10, 20, 40, 50];

// arr.forEach(() => {

// })

arr.forEach(function(num, index) {
    console.log(num); // Similar to num[i] 
    console.log(index); // Similar to i
})


// For Of loop
let newArray = [10, 20, 40, 50];

for (let item of newArray) {
    console.log(item);
}