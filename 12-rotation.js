/*
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
*/

function isRotation(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        if (rotate(str1, i) === str2) return true;
    }
    return false;
}

function rotate(string, n) {
    return string.slice(n) + string.slice(0,n);
}

console.log(isRotation('amazon', 'anazom'));
console.log(isRotation('amazon', 'azonam'));

// TIME COMPLEXITY: O(n)