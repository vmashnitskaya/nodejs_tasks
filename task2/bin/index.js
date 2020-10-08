#!/usr/bin/env node

const { program } = require('commander');

program
    .option('-s, --shift', 'shift in cipher')
    .option('-i, --input', 'input file')
    .option('-o, --output', 'output file')
    .option('-a, --action', 'action(encode/decode)')
    .parse(process.argv);

console.log('Hello');
