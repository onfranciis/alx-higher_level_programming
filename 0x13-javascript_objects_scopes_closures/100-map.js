#!/usr/bin/node

const { list } = require('./100-data.js');
const newList = [];
list.map((value, index) => {
  return newList.push(value * index);
});
console.log(list);
console.log(newList);
