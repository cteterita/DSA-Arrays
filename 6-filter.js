/*
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
*/

function filter(array) {
    let filteredArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
}

console.log(filter([1,7,5,3,9]));

// TIME COMPLEXITY: 0(n)