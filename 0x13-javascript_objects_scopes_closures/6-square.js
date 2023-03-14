#!/usr/bin/node

const SquareFirst = require('./5-square');

module.exports = class Square extends SquareFirst {
  constructor (c) {
    super();
    this.c = c;
  }

  charPrint (character) {
    if (character) {
      for (let i = 0; i < this.c; i++) {
        console.log(character.repeat(this.c));
      }
    } else {
      for (let i = 0; i < this.c; i++) {
        console.log('X'.repeat(this.c));
      }
    }
  }
};
