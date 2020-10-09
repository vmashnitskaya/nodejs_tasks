#!/usr/bin/env node

const { program } = require('commander');
const {inputProcessing} = require('./inputProcessing');

program
    .storeOptionsAsProperties(false)
    .option('-s, --shift <shift>', 'shift in cipher', value => value)
    .option('-i, --input <inputFile>', 'input file', value => value)
    .option('-o, --output <outputFile>', 'output file', value => value)
    .option('-a, --action <actionToPerform>', 'action(encode/decode)', value => value)
    .action(() =>{
        const {shift, input, output, action} = program.opts();
        inputProcessing(shift, input, output, action)
    })
    .parse(process.argv);


