#!/usr/bin/node
const number = process.argv[2];
if (Number.isNaN(number) || number === undefined) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < number; i++) {
    console.log('C is fun');
  }
}
