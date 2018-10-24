<!--Currency Exchange-->
function currencyExchange(uah){
  var uah, usd;
  typeof uah === "number" ? usd = (uah * 26) : alert("Please make sure to input a valid amount!");
  return alert("$" + uah + " = " + usd + "UAH");
}
<!--currencyExchange(23.244);-->

<!--Min and Max Values-->
function minMaxNumber(arrayOfNumbers){
  var min, max, tempMin, tempMax;
  for (i = 0; i < arrayOfNumbers.length; i++){
    tempMax = arrayOfNumbers[i];
    tempMin = arrayOfNumbers[i];
    for (j = 0; j < arrayOfNumbers.length; j++){
      tempMax <= arrayOfNumbers[j] ? tempMax = max = arrayOfNumbers[j] : "";
      tempMin >= arrayOfNumbers[j] ? tempMin = min = arrayOfNumbers[j] : "";
    }
  }
return alert("Max value is: " + max + ";" + " Min value is: " + min + ".");
}
var arrayOfNumbers = [101, 332, 33, 44, 525, 201];
<!--minMaxNumber(arrayOfNumbers);-->

<!--Avarage value-->
function avarageNumber(arr){
  var sum = 0;
  var avarage;
  for (var i = 0; i < arrayAvarage.length; i++) {
    sum += arrayAvarage[i];
  }
  avarage = sum/arrayAvarage.length;
  return alert("Avarage number is: " + avarage + ".");
}
var arrayAvarage = [15, 5, 20, 10];
<!--avarageNumber(arrayAvarage);-->

<!--Recursion-->
var recursion = function (number){
  console.log(number);
  number > 1 ? recursion(number-1) : console.log("The end");
};
recursion(10);

<!--Task#3-->
const users = {
  1: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  2: {
    name: 'Ivan',
    lastName: 'Bondarenko',
    otherData: {
      role: 'student'
    }
  },
  3: {
    name: 'Roman',
    lastName: 'Lurov',
    otherData: {
      role: 'student'
    }
  },
  4: {
    name: 'Oleg',
    lastName: 'Murko',
    otherData: {
      role: 'student'
    }
  },
  5: {
    name: 'Kurz',
    lastName: 'Smith',
  },
};
  Object.keys(users).map(function(keys){
  var user = users[keys];
  if(user) {
     console.log('name: ', user.name);
     console.log('last name: ', user.lastName);
     console.log('role: ', user.otherData)
  }
})

<!--Task#4-->
<!--Task#4.1 Using Loops-->
function triangle(){
  for (var i = 0; i < 8; i++) {
    var res = "#".repeat(i+1);
    console.log(res);
  }
}
triangle();

<!--Task#4.2 Using Recursion-->
var triangleRec = function(num){
  console.log("#".repeat(num));
  num < 9 ? triangleRec(num+1) : "";
}
triangleRec(1);

<!--Task#5 Fibonacci-->
function Fibonacci(n){
  var n = parseInt(prompt());
  var fibonacciArr = [n];
  fibonacciArr[0] = 1, fibonacciArr[1] = 1;
  for (var i = 2; i < n; i++) {
    fibonacciArr[i] = fibonacciArr[i-2] + fibonacciArr[i-1];
    console.log(fibonacciArr[i]);
  }
}
Fibonacci();
