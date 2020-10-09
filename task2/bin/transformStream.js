const {Transform} = require('stream');
const {ceasarCipher} = require('./encription');

exports.transformStream = (shift) => {
    return new Transform({
        transform(chunk, encoding, callback) {
            let result  = ceasarCipher(chunk.toString(), shift);

            callback(null, result);
        }
    })
}
