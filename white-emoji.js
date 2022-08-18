/**
  {
    "api":1,
    "name":"Covert to white slack emoji",
    "description":"Convert text to white slack emoji's",
    "author":"Max",
    "icon":"quote",
    "tags":"emoji,slack,funny,white"
  }
**/
const prefix = 'alphabet-white-';

function main(input) {
    try {
        input.text = input.text.split('').map(emoji).join('');
    } catch (e) {
        input.postError(e.message);
    }
}

const regex = /^[a-zA-Z]$/gm;

const mapping = {
    '#': 'hash',
    '!': 'exclamation',
    '?': 'question',
    '@': 'at',
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