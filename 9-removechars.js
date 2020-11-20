/*
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.
*/

function removeChars(string, chars) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (chars.search(string[i]) === -1) {
            newString += string[i];
        }
    }
    return newString
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// TIME COMPLEXITY: O(n)