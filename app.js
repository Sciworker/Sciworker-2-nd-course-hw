//задание 2.4.(1)
  let word = "Привет"
console.log(word) 
console.log(word) 
//  
// задание 2.4 (2)
for(let num=1;num<=5;num++){
   console.log(num) 
 }

//  задание 2.4 (3)
for(let num=7;num<=22;num++){
   console.log(num) 
 }

//Задание 2.4 (4)

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
}

for (let employee in obj) {
    console.log(`${employee} — зарплата ${obj[employee]} долларов`);
}

// Задание 2.4(5)

let n = 1000;
let num = 0;

while (n >= 50) {
    num++;
    n /= 2;
}

console.log(n, num);


// Задание 2.4 (6)

let firstFriday = 3;

for (let currentFriday = firstFriday; currentFriday <= 31; currentFriday+=7) {
    console.log(`Сегодня пятница, ${currentFriday}-е число. Необходимо подготовить отчёт.`);
}