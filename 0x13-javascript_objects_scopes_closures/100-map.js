#!/usr/bin/node

const { list } = require('./dummyTest');
const newList = [];
list.map((value, index) => {
  return newList.push(value * index);
});
console.log(list);
console.log(newList);
