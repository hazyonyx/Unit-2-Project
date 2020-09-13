let decVal = Number(prompt("Enter a decimal value"));

let biVal1 = decVal.toString(2);
let hexVal1 = decVal.toString(16);

let biLength = biVal1.length;
let hexLength = hexVal1.length;

//find compliment to 2 or 4 for front "0" padding
let biPadLen = 4 - ((biLength - 1) % 4 + 1);
let hexPadLen = 2 - ((hexLength - 1) % 2 + 1);

//adding "0" padding
let biPad = "000";
biPad = biPad.substring(0,biPadLen);
let biVal2 = biPad + biVal1;
let biOut = biVal2.match(/.{1,4}/g).join(' ');

//formatting output
let hexPad = "0";
hexPad = hexPad.substring(0,hexPadLen);
hexVal2 = hexPad + hexVal1;
let hexOut = hexVal2.match(/.{1,2}/g).join(' ');

//console.log(`${biVal1} ${biLength} ${biPadLen} ${biPad} ${biVal2} ${biOut}`);
//console.log(`${hexVal1} ${hexLength} ${hexPadLen} ${hexPad} ${hexVal2} ${hexOut}`);

console.log(`The binary of ${decVal} is: ${biOut}`);
console.log(`The hexadecimal of ${decVal} is: ${hexOut}`);