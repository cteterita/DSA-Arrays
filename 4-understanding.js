let Array = require('./array');

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3.5);

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

    // Print the 1st item in the array arr.
    console.log(arr.get(0));
    // 3

    // Empty the array and add just 1 item: arr.push("tauhida");
    while(arr.length) {
        arr.pop();
    }
    arr.push("tauhida");
    
    //Print this 1 item that you just added. What is the result? Can you explain your result?
    console.log(arr.get(0));

    // NaN
    // It looks like the Float64Array object that our memory class uses can only store floating point numbers.

    // What is the purpose of the _resize() function in your Array class?
    // Ultimately, it makes sure that there's room in memory for our array without overwriting anything else.
}

main();