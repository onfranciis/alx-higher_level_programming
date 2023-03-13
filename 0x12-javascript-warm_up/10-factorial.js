#!/usr/bin/node
const number = parseInt(process.argv[2]);
if (Number.isNaN(number)) {
  console.log(1);
} else {
  let value = 0;
  for (let i = 1; i <= number; i++) {
    value += i;
  }
  console.log(value);
}
