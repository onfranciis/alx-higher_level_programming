#!/usr/bin/node
module.exports =
  class Rectangle {
    constructor (w, h) {
      if ((w > 0) && (h > 0)) {
        this.width = w;
        this.height = h;
      }
    }

    print () {
      for (let i = 0; i < this.height; i++) {
        let value = '';
        for (let j = 0; j < this.width; j++) {
          value += 'X';
        }
        console.log(value);
      }
    }

    rotate () {
      for (let i = 0; i < (this.width * 2); i++) {
        let value = '';
        for (let j = 0; j < (this.height * 2); j++) {
          value += 'X';
        }
        console.log(value);
      }
    }

    double () {
      for (let i = 0; i < (this.height * 2); i++) {
        let value = '';
        for (let j = 0; j < (this.width * 2); j++) {
          value += 'X';
        }
        console.log(value);
      }
    }
  };
