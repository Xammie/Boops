/**
  {
    "api":1,
    "name":"Random capitalize",
    "description":"Add random capitalization",
    "author":"Max",
    "icon":"dice",
    "tags":"capitalize,random,slack,funny"
  }
**/

function main(input) {
    try {
        input.text = input.text.split('').map(format).join('');
    } catch (e) {
        input.postError(e.message);
    }
}

function format(char, index) {
    if (index % 2 === 0) {
        return char.toLowerCase();
    }

    return char.toUpperCase();
}