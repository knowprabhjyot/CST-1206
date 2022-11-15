// QUESTION 27

let array = [ 2, 4, 11, 2, 4 ];

function singleElement(array) {
	//this function should return 11
  let map = {};
  let output;
  
  for (let i = 0 ; i < array.length ; i++) {
  	
    // Check if array[i] exists inside the map
    if (map[array[i]]) { // map[4] , map { 2 : 2, 4 : 2, 11 : 1}
    	map[array[i]] = map[array[i]] + 1;
    } else {
    	map[array[i]] = 1;
    }
  }
  
  for (let key in map) {
	if (map[key] == 1) {
		output = key;
  }
}


return output;
  
}


singleElement(array)


// QUESTION 28
let array2 = [ 2, 4, 1, 2, 4, 2 ];
function mostRepeated(array) {

    let map = {};
    let max = 0;
    let val;
    

  
  for (let i = 0 ; i < array.length ; i++) {
  	
    // Check if array[i] exists inside the map
    if (map[array[i]]) {
    	map[array[i]] = map[array[i]] + 1;
    } else {
    	map[array[i]] = 1;
    }
  }
  

    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            val = key;
        }
    }

    return val;


}