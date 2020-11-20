/*
A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string.
*/

function urlify(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newString += '%20';
        } else {
            newString += string[i];
        }
    }
    return newString;
}

console.log(urlify('tauhida parveen'));

// TIME COMPLEXITY: O(n)