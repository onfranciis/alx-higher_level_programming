#!/usr/bin/node
const number = process.argv[2];
if (Number.isNaN(parseInt(number)) || number === undefined) {
  console.log('Missing size');
} else {
  for (let i = 0; i < number; i++) {
    let value = '';
    for (let j = 0; j < number; j++) {
      value += 'X';
    }
    console.log(value);
  }
}
