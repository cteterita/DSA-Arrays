let Array = require('./1-array');

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(4);

    console.log(arr);

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);
}

main();

// What is the length, capacity and memory address of your array?
// { length: 1, _capacity: 3, ptr: 0 } 

// Add the followingin the main function and then print the array
// [omitted]

// What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
// { length: 6, _capacity: 12, ptr: 3 }
// The first three items were added to reach the previous capacity of 3,
// then when the fourth was pushed, the array was resized to (3+1)*3 or 12. Memory addresses 0-2 were already allocated, so the array was copied to an address of 3.

