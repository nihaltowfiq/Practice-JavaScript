// Practice some RegEx validation;
let regex, str;

// BD Postal Code;
regex = /^[0-9]{4}$/;
str = "6000";

// BD Phone Number;
// +8801788888888 or 8801788888888 or 01788888888;
regex = /^(\+)?(88)?01[^0-2][0-9]{8}$/;
str = "01788888888";

// Email: something.something@gmail.com;
regex = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
str = "something.something@gmail.com";

console.log(regex.test(str));
