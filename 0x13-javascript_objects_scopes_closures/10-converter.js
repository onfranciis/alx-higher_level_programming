#!/usr/bin/node

exports.converter = function (base) {
  return (figure) => {
    return figure.toString(base);
  };
};
