let regex, str;

// Literal Character
regex = /hello/;
regex = /hello/i; // i = caseInsensitive;
regex = /lo w/;

// Meta Character
regex = /^hello/; // ^ = must start with;
regex = /hello$/; // $ = must end with;
regex = /^hello$/; // thats mean must start and end with;
regex = /h.llo/; // . = mathces any one charater;
regex = /h*llo/; // * = 0 or more character;
regex = /he?llo/; // ? = opitonal charater;
regex = /hello\?/; // \ = escaping;

str = "hello? world";

console.log(regex.exec(str));

function regexTest(regex, str) {
  if (regex.test(str)) {
    console.log(`"${str}" matches "${regex.source}"`);
  } else {
    console.log(`"${str}" doesn't match to "${regex.source}"`);
  }
}
regexTest(regex, str);
