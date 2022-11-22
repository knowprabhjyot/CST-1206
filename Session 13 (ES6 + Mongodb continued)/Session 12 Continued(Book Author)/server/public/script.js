const baseURL = "/api/v1";
const bookTable = document.getElementById("bookTable");
const authorList = document.getElementById("authorList");

let authors = [];
let newBook = {};
let newAuthor = {};

const getAllBooks = async () => {

    // We are removing everything on the table data, so that we can show fresh data everytime
    bookTable.innerHTML = "";

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


    // Clearing if there is any data present here!
    authorList.innerHTML = "";

    // This Data is coming from backend
    const data = await fetch(`${baseURL}/authors`);
    const dataInJSON = await data.json();
    
    authors = dataInJSON.data;

    for (let i = 0 ; i < authors.length ; i++) {
        authorList.innerHTML += `<option value="${authors[i]._id}">${authors[i].name}</option>`
    }

}

const saveBook = async (event) => {

    // This prevents the browser from refreshing
    event.preventDefault();

    console.log(newBook);
    const data = await fetch(`${baseURL}/books`, {
        method: "post",
        body: JSON.stringify(newBook), // We are doing this because we want to send data in json format,
        headers: { // Meta information
            'Content-Type': 'application/json'
        }
    });

    // After saving call this function

    
    getAllBooks();


}

getAllBooks();



getAuthors();

//  WE WILL DO THIS IN UPCOMING CLASS!

const setTitle = (event) => {
    newBook.title = event.target.value;
}


const setDescription = (event) => {
    newBook.description = event.target.value;
    
}

const selectAuthor = (event) => {
   newBook.author = event.target.value;
}



//  AUTHOR FORM HANDLERS

const setName = (event) => {
    newAuthor.name = event.target.value;
}


const setEmail = (event) => {
    newAuthor.email = event.target.value;
    
}

const setContact = (event) => {
   newAuthor.contact = event.target.value;
}

const saveAuthor = async (event) => {

    event.preventDefault();

    const data = await fetch(`${baseURL}/authors`, {
        method: "post",
        body: JSON.stringify(newAuthor),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(data);

    getAuthors();

}
