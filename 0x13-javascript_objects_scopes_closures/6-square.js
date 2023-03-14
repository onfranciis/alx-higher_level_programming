#!/usr/bin/node

const SquareFirst = require('./5-square');

module.exports = class Square extends SquareFirst {
  constructor (c) {
    super(c);
  }

  charPrint (character) {
    if (character) {
      for (let i = 0; i < this.height; i++) {
        console.log(character.repeat(this.height));
      }
    } else {
      this.print();
    }
  }
};
