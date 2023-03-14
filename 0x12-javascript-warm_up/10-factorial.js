#!/usr/bin/node
// const number = parseInt(process.argv[2])
// let value = 1
// for (let i = 1; i <= number; i++) {
//   value *= i
// }
// console.log(value)

function factorial (n) {
  return n === 0 || isNaN(n) ? 1 : n * factorial(n - 1);
}

console.log(factorial(Number(process.argv[2])));
