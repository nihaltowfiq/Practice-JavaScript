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

// Character Set using Bracket [];
regex = /h[ea]llo/; // [] = must be one of them inside bracket;
regex = /h[^ea]llo/; // [^] = anything except those inside bracket;
regex = /^[ha]ello/; // ^[] = must start with those inside bracket;
regex = /[a-h]ello/; // [-] = must be start between them(-) inside bracket;
regex = /[A-Z]ello/; // first letter must be uppercase;
regex = /[A-Za-z]ello/; // first letter upper or lower case;
regex = /[0-9]ello/; // first letter must be number digit;
regex = /^[0-9]ello/; // must start with number digit;
regex = /[^0-9]ello/; // no digit;
regex = /[0-9][0-9]ello/; // two digit;
regex = /[0-9][0-9][0-9][0-9][0-9]/; //five digit;

// Braces {} - Quantifier;
regex = /hel{2}o/; // must occur exacly two times;
regex = /hel{3,5}o/; // range;
regex = /hel{2,}o/; // at least 2 times;

// Parentheses () - Grouping;
regex = /([0-9]{5})/; // /[0-9][0-9][0-9][0-9][0-9]/; //five digit; => same!!
regex = /[(0-9)x]{3}/;

// Let's check Bangladesh Phone Number;
regex = /^01[^0-2][0-9]{8}$/;
regex = /^\+8801[^0-2][0-9]{8}$/;

str = "01788888888";
str = "+8801788888888";

// Shorthand Character Classes;
regex = /\w/; // Word character - alpha, numeric or _;
regex = /\w+/; // one or more Word character - alpha, numeric or _;
regex = /\W/; // non-word character;
regex = /\W+/; // one or more none word character;
regex = /\d/; // digit character;
regex = /\d+/; // one or more digit character;
regex = /\D/; // non-digit character;
regex = /\D+/; // one or more non-digit character;
regex = /\s/; // match white space;
regex = /\S/; // match non white space;
regex = /Hellob/; // Word Boundary
regex = /bHellob/;

// Assertions
regex = /x(?=yz)/; // Matches x only if x is before y
regex = /x(?!yz)/;

str = "wegsdg#";

console.log(regex.exec(str));

function regexTest(regex, str) {
  if (regex.test(str)) {
    console.log(`"${str}" matches "${regex.source}"`);
  } else {
    console.log(`"${str}" doesn't match to "${regex.source}"`);
  }
}
regexTest(regex, str);
