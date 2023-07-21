/**
  {
    "api":1,
    "name":"Text with pom pom",
    "description":"Convert text to contain pom pom",
    "author":"Max",
    "icon":"quote",
    "tags":"emoji,slack,funny,yellow"
  }
**/
const prefix = 'alphabet-yellow-';
const infix = ':pom-pom:';

function main(input) {
    try {
        input.text = input.text
            .split('')
            .map(emoji)
            .reduce((list, test) => {
                return [...list, infix, test];
            })
            .join('');
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