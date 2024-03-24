

//задание  2.5(1)

 function min(a, b){
   if(a<b){
     return(a) 
   }else{
     return(b)
   }
 }
 document.write(min(7,4))

//задание 2.5(2)
function even(a){
    if(a%2===0){
      return('Число четное')
    }else{
      return('Число нечетное')
    }
  }
   document.write(even(8))

  //задание 2.5(3)
  function square(a){
    console.log(a*a)
    return(a*a)
  }
  document.write(square(6))

    //задание 2.5(4)
  function user_age(){
    let age = prompt("Введите свой возраст ")
    if (age<0){
      document.write("Вы ввели неправильное значение")
      die()
    }
    if(age<=12){
      document.write("Привет, друг")
    } else{
      document.write("Добро пожаловать!")
    }
  }
   user_age()
  
  // задание2.5(5)
  function addition(a,b){
  if(isNaN(a) || isNaN(b)){
    return 'Одно или оба значения не являются числом'
  }
    return a * b
  }
   document.write(addition(4,2))
  
  // задание 2.5(6)
  function cube(){
    let number = prompt("Введите число")
    if (isNaN(number)){
    return 'Переданный параметр не является числом'
    }
      return `${number} в кубе равняется ${number*number*number}`
  }
  document.write(cube())
  
  // задание 2.5(7)
  
  class circle{
    constructor(radius){
      this.radius=radius
    }
    getArea(){
      return Math.PI * this.radius ** 2 
    }
    getParametr(){
      return 2 * Math.PI * this.radius
    }
  }
  let circle1 = new circle(5)
  let circle2 = new circle(6)
  console.log("Площадь круга 1: " + circle1.getArea())
  console.log("Периметр круга 1: " + circle1.getParametr())
  console.log("Площадь круга 2: " + circle2.getArea())
  console.log("Периметр круга 2: " + circle2.getParametr())


  //задание 2.5(8)
  function getseason(month){
    if(month >=3 && month <=5){
        return 'Весна'
    }
    else if(month >= 6 && month <=8){
        return 'Лето'
    }
    else if(month >= 9 && month <=11){
        return 'Осень'
    }
    else if(month == 12 || month ==1 || month ==2){
        return 'Зима'
    } else{
        'Такого месяца нет'
    }
  }
  document.write(getseason(6))