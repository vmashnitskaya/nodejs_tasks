module.exports = {
    exitProcess: (message, code) => {
        process.stderr.write(message);
        process.exit(code);
    }
}