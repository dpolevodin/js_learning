
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(arr) {
//   let averAgeArr = arr.map(user => user.age)
//   result = 0
//   for (item of averAgeArr) {
//     result += item
//   }
//   return result / averAgeArr.length
// }

function getAverageAge(arr) {
  return arr.reduce((prev, user) => prev + user.age, 0) / arr.length
}
