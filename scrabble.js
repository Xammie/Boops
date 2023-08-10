/**
 {
 "api":1,
 "name":"Covert to scrabble letters",
 "description":"Convert text to scrabble emoji's",
 "author":"Max",
 "icon":"quote",
 "tags":"emoji,slack,funny,scrabble"
 }
 **/
const prefix = 'scrabble-';

function main(input) {
    try {
        input.text = input.text.split('').map(emoji).join('');
    } catch (e) {
        input.postError(e.message);
    }
}

const regex = /^[a-zA-Z]$/gm;

const mapping = {
    ' ': 'blank',
};

function emoji(char) {
    if (char in mapping) {
        return ':' + prefix + mapping[char] + ':';
    }

    if (! char.match(regex)) {
        return char;
    }

    return ':' + prefix + char.toLowerCase() + ':';
}