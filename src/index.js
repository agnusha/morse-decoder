const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

var MORSE_PAIRS = {
    '10':  '.',
    '11':  '-',
  };

function decode(expr) {
    expr = expr.split('');
    let iterationCount = expr.length-1;
    let str = '';
    for (let j = 0; j < iterationCount; j = j + 10) {
        let currentTenSymbols = expr.slice(j, j + 10);
        if (currentTenSymbols[0] == '*')
            str+=' ';
        else 
        {
            let dottedDasArray = [];
            for (let i = 0; i <= currentTenSymbols.length; i = i + 2) {
                    let current =MORSE_PAIRS[currentTenSymbols[i] + currentTenSymbols[i + 1]];
                    if (current)
                    dottedDasArray.push(current);
            }
            str+=MORSE_TABLE[dottedDasArray.join('')];
        }
    }
    return str;
}

module.exports = {
    decode
}