//RegEx or Regular Expression

let regex = /hello/i; // i for caseInsensitive;

let str = "Hello World!";
str = "hello world";
str = "abcdHELLOabcd";
str = "World";

//execution method of regex = exec() => it returns result: an array or null;
let result = regex.exec(str);

//test method of regex = test() => it returns true/false;
result = regex.test(str);

//match method of regex/string = match() => returns an array or null; same like exec() but useCase different!
result = str.match(regex);

//search() => returns index of the first match or -1;
result = str.search(regex);

//replace() => returns a new string;
str = "Hello World!";
let newStr = str.replace(regex, "hi");

console.log(newStr);

console.log(result);
