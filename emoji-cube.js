/**
 {
    "api":1,
    "name":"Cube of emoji's",
    "description":"The best thing in emoji since sliced bread",
    "author":"Max",
    "icon":"quote",
    "tags":"emoji,slack,funny,cube"
  }
 **/
const emoji = ':party-blob:';
const empty = '          ';
const length = 32;

function main(input) {
    try {
        const emoji = input.text;
        let output = '';
        for (let height = 0; height < length; height++) {
            for (let width = 0; width < length; width++) {
                if ((width + height) % 2 === 0) {
                    output += emoji;
                } else {
                    output += empty;
                }
            }
            output += '\n'
        }

        input.text = output
    } catch (e) {
        input.postError(e.message);
    }
}
