module.exports = {
    ceasarCipher: (data, shift) =>{
        let result = "";

        data.split('').forEach(el =>{
            const elCode = el.charCodeAt(0);

            if(elCode >= 97 && elCode <= 122) {
                result += String.fromCharCode(((elCode - 97 + shift) % 26) + 97);
            } else if(elCode >= 65 && elCode <= 90) {
                result += String.fromCharCode(((elCode - 65 + shift) % 26) + 65);
            } else {
                result += String.fromCharCode(elCode);
            }
        })
        return result;
    }
}