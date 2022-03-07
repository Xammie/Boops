/**
  {
    "api":1,
    "name":"Space",
    "description":"Add spaces between text",
    "author":"Max",
    "icon":"quote",
    "tags":"space,slack,funny"
  }
**/

function main(input) {
    try {
        input.text = input.text.split('').map(format).join('');
    } catch (e) {
        input.postError(e.message);
    }
}

const regex = /^[a-zA-Z]$/gm;

function format(char) {
    if (! char.match(regex)) {
        return char;
    }

    return char.toUpperCase() + ' ';
}