/*
    CIT 281 Project 2
    Name: Will Mosher
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

console.log(result);

/* returns a single, random, lowercase letter */
function getRandomLetter() {
    return alphabet[getRandomInteger(1,alphabet.length-1)]
}
console.log(getRandomLetter());

/* returns random length string */
console.log("line 27")
resultX = ""
function getRandomString(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(10, 21); i++) {
        resultX += getRandomLetter();
    }
    return resultX;
}
console.log(getRandomString());

/* return a string in ascending order */
function getSortedString(string) {return string.split("").sort().join(""); }

console.log(getSortedString(getRandomString()));