#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
const update = () => {
  myObject.value += 1;
};
myObject.incr = update;
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
