

let userList = [];

function submitForm() {

    let data = {
        name: "",
        email: ""
    }

    // Saving new form submit data
    userList.push(data);

    localStorage.setItem("userList", JSON.stringify(userList));
}


// You can get the userlist using

let updatedUserList = JSON.parse(localStorage.getItem("userList"));

for (let i = 0 ; i < updatedUserList.length ; i++) {
    
}
