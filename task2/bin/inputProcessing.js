const {pipeline} = require('stream');
const path = require('path');
const fs = require('fs');
const {transformStream} = require('./transformStream');

exports.inputProcessing = (shift, input, output, action) =>{

    process.on('exit', (code) => {
        console.log(`Exited with code: ${code}`);
    });

    if(!shift || !action){
        console.log('Parameters --shift and --action are required. Please try again.')
        process.exit(9);
    }

    const defaultReadable = () =>{
        console.log('Enter the data to be displayed ');
        return process.stdin;
    }
    
    const readableStream =  input ? fs.createReadStream(path.resolve(__dirname, '..', `files/${input}`)) : defaultReadable();
    const writableStream =  output ? fs.createWriteStream(path.resolve(__dirname, '..', `files/${output}`)) : process.stdout;

    const shiftAmount = action === 'encode' ? Number(shift) : Number(shift) * -1;


    pipeline(
        readableStream,
        transformStream(shiftAmount),
        writableStream,
        (error) =>{
            if(error) {
                console.log(error);
            }else{
                console.log('Finished.')
            }
        }
    )
}
