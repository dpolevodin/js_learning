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
