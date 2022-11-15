const baseURL = "http://localhost:3000/api/v1";
const bookTable = document.getElementById("bookTable");
const authorList = document.getElementById("authorList");

let authors = [];
let newBook = {};

const getAllBooks = async () => {
    const data = await fetch(`${baseURL}/books`);
    const dataInJSON = await data.json();
    const bookData = dataInJSON.data;

    for (let i = 0; i < bookData.length; i++) {
        const tr = document.createElement("tr");

        const bookTitleId = document.createElement("td");
        console.log(bookData[i]._id);
        bookTitleId.textContent = bookData[i]._id;
        tr.appendChild(bookTitleId);


        const bookTitleTD = document.createElement("td");
        bookTitleTD.textContent = bookData[i].title;

        tr.appendChild(bookTitleTD);

        const bookDescriptionTD = document.createElement("td");
        bookDescriptionTD.textContent = bookData[i].description;

        tr.appendChild(bookDescriptionTD);

        const bookAuthorTD = document.createElement("td");
        bookAuthorTD.textContent = bookData[i].author.name;

        tr.appendChild(bookAuthorTD);



        bookTable.appendChild(tr);


    }
}


const getAuthors = async() => {
    const data = await fetch(`${baseURL}/authors`);
    const dataInJSON = await data.json();
    authors = dataInJSON.data;

    for (let i = 0 ; i < authors.length ; i++) {
        authorList.innerHTML += `<option value="${authorList[i].id}">${authors[i].name}</option>`
    }

}

const saveBook = async (event) => {

    // This prevents the browser from refreshing
    event.preventDefault();

    console.log("I AM BEING CALLED");




}

getAllBooks();



getAuthors();

//  WE WILL DO THIS IN UPCOMING CLASS!

// const setEmail = (event) => {
//     console.log(event.target.value);
//     newBook.email = event.target.value;
// }


// const setDescription = (event) => {
//     console.log(event.target.value);
//     newBook.description = event.target.value;
    
// }

// const selectAuthor = (event) => {
//     console.log(event);
// }
