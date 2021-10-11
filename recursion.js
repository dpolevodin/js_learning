// function sumTo(n) {
//   if (n === 1) {
//     return 1
//   } else {
//     return n + sumTo(n-1)
//   }
// }

const sumTo = n => (n === 1) ? n : n + sumTo(n-1);

console.log(sumTo(100)) // = 5050


// console.logsumTo(2) // = 2 + 1 = 3
// console.logsumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function factorial(n) {
//   if (n === 1) {
//     return 1
//   } else {
//     return n * factorial(n-1)
//   }
// }

const factorial = n => (n === 1) ? 1 : n * factorial(n -1)

console.log(factorial(5))

function fib(n) {
  if (n <= 1) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
 }

//  function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

alert(fib(3)); // 2
alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
