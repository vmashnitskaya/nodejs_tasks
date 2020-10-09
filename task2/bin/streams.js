const path = require('path');
const fs = require('fs');
const {Transform} = require('stream');
const {ceasarCipher} = require('./encription');
const {exitProcess} = require('./exitProcess');

module.exports ={
    readableStream: (input) =>{
        if(!input){
            process.stdout.write('Please enter you entry \n');
            process.stdout.write('Enter Ctrl + C if you want to stop the process.');
            return process.stdin;
        }else if(input){
            return fs.createReadStream(path.resolve(__dirname, '..', `files/${input}`))
        }else{
            exitProcess('Input file is not found. Please try again.', 9)
        }
    },
    writableStream: (input) =>{
        if(!input){
            return process.stdout;
        }else if(input){
            return fs.createWriteStream(path.resolve(__dirname, '..', `files/${input}`))
        }else{
            exitProcess('Output file is not found. Please try again.', 9)
        }
    },
    transformStream: (shift) => {
        return new Transform({
            transform(chunk, encoding, callback) {
                let result  = ceasarCipher(chunk.toString(), shift);

                callback(null, result);
            }
        })
    }
}