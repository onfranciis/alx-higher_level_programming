#!/usr/bin/node
const number = parseInt(process.argv[2]);
let value = 1;
for (let i = 1; i <= number; i++) {
  value *= i;
}
console.log(value);
