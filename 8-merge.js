/*
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.
*/

function mergeArrays(arr1, arr2) {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    if (arr1[0] <= arr2[0]) {
        return [arr1[0], ...mergeArrays(arr1.splice(1), arr2)];
    }
    if (arr2[0] <= arr1[0]) {
        return [arr2[0], ...mergeArrays(arr1, arr2.splice(1))];
    }
}


console.log(mergeArrays([1,2],[2,3]));
console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// TIME COMPLEXITY: O(n)