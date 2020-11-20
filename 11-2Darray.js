/*
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
*/

const Array = require("./1-array");

function zeroOut(array) {
    let yZeros = [];
    let xZeros = [];

    // Iterate through and determine which rows to zero out
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[y].length; x++) {
            if (array[y][x] === 0) {
                yZeros.push(y);
                xZeros.push(x);
            }
        }
    }

    // Iterate through again and actually zero things out
    for (let y = 0; y < array.length; y++) {
        if (yZeros.indexOf(y) >= 0) {
            let l = array[y].length;
            array[y].fill(0);
        } else {
            for (let x = 0; x < array[y].length; x++) {
                if (xZeros.indexOf(x) >= 0) {
                    array[y][x] = 0;
                }
            }
        }
    }
    return array;
}

let example =
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

console.log(zeroOut(example));

// TIME COMPLEXITY: 0(n^2)