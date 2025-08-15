/**
 {
 "api":1,
 "name":"convert to morse code",
 "description":"convert to morse code",
 "author":"Max",
 "icon":"quote",
 "tags":"morse,slack,code"
 }
 **/

function main(input) {
    try {
        input.text = input.text.split('').map(format).join('');
    } catch (e) {
        input.postError(e.message);
    }
}

const mapping = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
};

function format(char) {
    char = char.toLowerCase();
    if (mapping[char]) {
        return mapping[char] + ' ';
    }

    return char;
}
