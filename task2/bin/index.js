#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const {pipeline} = require('stream');

program
    .option('-s, --shift <shift>', 'shift in cipher')
    .option('-i, --input <inputFile>', 'input file')
    .option('-o, --output <outputFile>', 'output file')
    .option('-a, --actions <actionToPerform>', 'action(encode/decode)')
    .parse(process.argv);



process.on('exit', (code) => {
    console.log(`Exited with code: ${code}`);
});

if(!program.shift || !program.actions){
    console.log('Parameters --shift and --actions are required. Please try again.')
    process.exit(400);
}

const inputFilePath = path.resolve(__dirname, '..', `files/${program.input}`);
const outputFilePath = path.resolve(__dirname, '..', `files/${program.output}`);


pipeline(
    fs.createReadStream(inputFilePath),
    fs.createWriteStream(outputFilePath),
    (error) =>{
        console.log(error);
    }
)

