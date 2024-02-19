// задание 1
let a = 10;
alert(a);
a = 20
alert(a);

// задание 2
const yearfirstiphone = 2007;
alert(yearfirstiphone);

// задание 3
const namejscreator = "Brendan Eich"
alert(namejscreator);

// задание 4

let num_1 = 10;
let num_2 = 2;
alert([num_1+num_2, num_1-num_2, num_1 * num_2, num_1/num_2]);



// задание 5
let result = 2;
result **=5;
alert(result);

// задание 6
let res_1 = 9;
let res_2 = 2;
alert(`Остаток от деления: ${res_1 % res_2}`);


// задание 7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num++;
num = num--;
console.log(num);

// задание 8
let age = prompt( "Сколько Вам лет")
alert("Вам "+ age + " лет")

// задание 9
let user = {
    name: "Иван",
    age:  20,
    isAdmin: true
}
console.log(user.age)

// задание 9.1
user["city of residence"]="Minsk"
console.log(user["city of residence"])

// задание 9.2
user[age]=30
console.log(user[age])

// задание 9.3
delete user["city of residence"]
console.log(user["city of residence"])

// задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info])

// задание 10

let name10 = prompt("Как Ваше имя?")
alert("Привет, "  + name10 +"!")
