

// // Var

function sum() {
    var a;
    var b;
    // var b; // Declaration
    a = 10;
    
    console.log(c); // Referrential error
    let  c = 10;

    console.log(b, "Value of b");

    if (true) {
        b = 11; // Assignment/Call
        let c = 10; // died within the block
        const d = 20; // died within the block
    }

    // console.log(a); // 10
    // console.log(b); // 11
    // console.log(c); // Error --> Referential Eror
    // console.log(d); // Error  Referential Error
    // c & d are in the temporal dead zone
}

sum();


function random() {
    let a = 5;
    const d = 5;
    if (true) {
        let a = 10;
        if (true) {
            console.log(a, "inside");
        }
    }

    console.log(a, "Outside")
}

random();