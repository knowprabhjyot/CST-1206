// function getData() {
//     fetch('https://reqres.in/api/users').then((response) => {
//         return response.json(); // Because by default the response you get is not of type json
//     }).then((finalOutput) => {
//         console.log(finalOutput);
//     }).catch((error ) => {
    // console.log(error)
// })
// }


// async function getData() {
//     let response = await fetch('https://reqres.in/api/users');
//     let output = await response.json();
//     console.log(output);
// }

const getData = async () => {
   try {
    let response = await fetch('https://reqres.in/api/users');
    let output = await response.json();
    console.log(output);
   } catch(error) {
    console.log("ERROR");
   }
}

getData();