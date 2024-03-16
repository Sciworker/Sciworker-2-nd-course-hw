
//   задание 2.8(1)
 const people1 = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
people1.sort((a,b) =>  a.age - b.age)

console.log(people1)

// задание2.8(2)
function isPositive(num) {
    return num >= 0;
}
function isMale(obj) {
    return obj.gender === "male";
}
function filter(arr, ruleFunc) {
    let filteredArr = [];

    arr.map(elem => ruleFunc(elem) ? filteredArr.push(elem) : elem);

    return filteredArr;
}
console.log( filter([3, -4, 1, 9], isPositive) );
const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'},
]
console.log(filter(people, isMale));


//  задание 2.8(3)
const inter = setInterval(() => {
    let today = new Date;
    document.write(today +'<br>')
}, 3000);

setTimeout(() => {
    clearInterval(inter)
    document.write('30 секунд прошло')
}, 30000);

//  задание 2.8(4)
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function() {
    console.log("Привет, Глеб!");
})

// задание 2.8(5)
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); };
    }, 1000);
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(function() {
    sayHi('Глеб');
});
