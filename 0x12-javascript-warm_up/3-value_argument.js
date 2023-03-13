#!/usr/bin/node
import { argv } from 'node:process';

if (!argv[2]) {
  console.log('No argument');
} else {
  argv.slice(2, 3).forEach((arg) => {
    console.log(arg);
  });
}
