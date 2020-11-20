/*
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.
*/

function maxSum(array) {
    let sum = array[0];
    let max = sum;
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
        if (sum > max) {
            max = sum;
        }
        let subMax = maxSum(array.slice(i));
        if (subMax > max) {
            max = subMax;
        }
    }   
    return max;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// TIME COMPLEXITY: O(n^2)