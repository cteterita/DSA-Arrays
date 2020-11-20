/*
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.
*/

function products(array) {
    return array.map((n,i) => {
        let p = 1;
        for(let j = 0; j < array.length; j++) {
            if (i !== j) {
                p *= array[j];
            }
        }
        return p;
    })
}

console.log(products([1, 3, 9, 4]));

// TIME COMPLEXITY: O(n^2)