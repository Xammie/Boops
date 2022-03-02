/**
  {
    "api":1,
    "name":"Covert to slack emoji",
    "description":"Convert text to slack emoji's",
    "author":"Max",
    "icon":"quote",
    "tags":"emoji,slack,funny"
  }
**/

function main(input) {
    try {
        input.text = input.text.split('').map(emoji).join('');
    } catch (e) {
        input.postError(e.message);
    }
}

const regex = /^[a-zA-Z]$/gm;

function emoji(char) {
    if (! char.match(regex)) {
        return char;
    }

    return ':_' + char.toLowerCase() + ':';
}