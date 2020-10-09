const {pipeline} = require('stream');
const {transformStream, readableStream, writableStream} = require('./streams');
const {exitProcess} = require('./exitProcess');

exports.inputProcessing = (shift, input, output, action) =>{


    if(!shift || !action){
        exitProcess('Parameters --shift and --action are required. Please try again.', 9);
    }

    const shiftAmount = action === 'encode' ? Number(shift) : Number(shift) * -1;


    pipeline(
        readableStream(input),
        transformStream(shiftAmount),
        writableStream(output),
        (error) =>{
            if(error) {
                console.log(error);
            }else{
                console.log('Finished.')
            }
        }
    )
}
