#!/usr/bin/node

exports.esrever = function (list = []) {
  const emptyArray = [];
  for (let i = list.length - 1; i >= 0; i--) {
    emptyArray.push(list[i]);
  }
  return emptyArray;
};
