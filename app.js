
// задание 1(2.3)
let password = "123456";
let user_password = prompt(" Введите пароль ");
if(password === user_password) {
alert("Пароль введен верно" )
} else{
  alert("Пароль введен неверно" )
}

// задание 2(2.3)
let c = 6
с > 0 && c < 10 ? console.log('Верно') : console.log(' Неверно');

// задание 3(2.3)
let d = 10
let e = 90
d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

// задание 4(2.3)
let a = '2';
let b = '3';
alert(parseInt(a) + parseInt(b));

//задание 5(2.3)
let monthNumber = 12;
switch(monthNumber){
case 1:
case 2:
case 12:
alert('Winter');
break;
case 3:
case 4:
case 5:
alert('Spring');
break;
case 6:
case 7:
case 8:
alert('Summer');
break;
case 9:
case 10:
case 11:
alert('Autumn');
break;
default:
alert("Введите число месяца")
}