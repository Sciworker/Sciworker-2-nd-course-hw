// Задача 1
let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) break;
}

// Задача 2
let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) console.log(i);
}

//Задача 3
let arr = [1, 3, 5, 10, 20];

console.log(arr.join(' '));

// Задача 4
let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}

console.log(arr)


// Задача 5
let arr = [1, 1, 1];

arr.push(2, 2, 2);

console.log(arr);

// Задача 6
let arr = [9, 8, 7, 'a', 6, 5];

arr.splice(arr.indexOf('a'), 1);

arr = arr.sort((a, b) => a - b);

console.log(arr);

// Задача 7
let arr = [9, 8, 7, 6, 5];
let userGuess = prompt("Угадай число");

if (arr.includes( parseInt(userGuess) )) alert('Угадал');
else alert('Не угадал');

// Задача 8
let str = 'abcdef';

console.log( str.split('').reverse().join('') );

// Задача 9
let arr = [[1, 2, 3],[4, 5, 6]];

console.log( [...arr[0], ...arr[1]] );

// Задача 10
let arr = [2, 1, 9, 3, 6, 7, 5, 10, 4, 8];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i+1]);
}

// Задача 11
 function squareArr(arr) {
     return arr.map(elem => elem**2);
 }
 
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
 console.log(squareArr(arr));

// Задача 12
function lengthsArr(arr) {
    return arr.map(str => str.length);
}

let arr = ['a', 'bc', 'def', ''];

console.log(lengthsArr(arr));

// Задача 13
function onlyNegativeNums(arr) {
    return arr.filter(num => num < 0);
}

let arr = [0, 1, -1, 2, -2, 3, -3];

console.log(onlyNegativeNums(arr));

// Задача 14
let arr = []

for (let i = 0; i < 10; i++) {
    arr.push( Math.floor( (Math.random() * 11) ) );
}

let evenArr = arr.filter(num => num % 2 == 0);

console.log(arr, evenArr);

// Задача 15
let arr = [];

for (let i = 0; i < 6; i++) {
    arr.push( Math.floor( Math.random() * 10 + 1 ) );
}

let sum = arr.reduce((prevValue, value) => prevValue + value, 0);
let average = sum / arr.length;

console.log(average);

