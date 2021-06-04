/*
    CIT 281 Project 2
    Name: Will Mosher
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

/* 
for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

console.log(result); 
*/

// returns a single, random, lowercase letter
const getRandomLetter = function () {
    return alphabet[getRandomInteger(1,alphabet.length-1)];
}
console.log(getRandomLetter());

// returns random length string
// console.log("line 29")
resultX = ""
const getRandomString = function (minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(10, 21); i++) {
        resultX += getRandomLetter();
    }
    return resultX;
}
// console.log(getRandomString().length);
// console.log(getRandomString());

// returns a string in ascending order
const getSortedString = function (string) {return string.split("").sort().join(""); }

// console.log(getSortedString(getRandomString()).length);
console.log(getSortedString(getRandomString()));