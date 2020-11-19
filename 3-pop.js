let Array = require('./array');

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

    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr);
}

main();

// What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

// { length: 3, _capacity: 12, ptr: 3 }
// At each pop we just decremented the length of the array. No changes to the capacity occured. Notably, the memory that stored the popped values wasn't actually freed.