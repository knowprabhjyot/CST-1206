// Arrays are used to store collection of data

let studentList = []; // There is no data inside, which means its an empty array

let students = ["Kevin", "David"]; // Array with strings

let list = ["Kevin", 30, true]; // Array with multiple types of data

list [0] // "Kevin"
list [10] // undefined

list[3] = "David";

console.log(list.length);  // 4


//************  */ Push Method (Adds element in the last index of the array)

let fruitsList = ["Apples", "Mangoes"];

fruitsList.push("Pineapple", "Orange", "Kiwi");

console.log(fruitsList) // ["Apples", "Mangoes", "Pineapple", "Orange", "Kiwi"];

//************  */ Unshift Method (Adds element in the start index of the array)

fruitsList.unshift("Bananas", "Grapes");

console.log(
    fruitsList, "After using unshift"
);

//************  */ POP Method (Removes element from the last index of the array)

fruitsList.pop();

console.log(fruitsList, "after pop");

//************  */ Shift Method (Removes element in the first index of the array)

fruitsList.shift();

console.log(fruitsList, "after shift");
