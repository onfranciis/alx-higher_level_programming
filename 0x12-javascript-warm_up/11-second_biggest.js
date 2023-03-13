#!/usr/bin/node
const array = process.argv.slice(2);
if (array.length < 2) {
  console.log(0);
} else {
  const sortedArray = array.sort((a, b) => b - a);
  console.log(sortedArray[1]);
}
