let inputNumber = prompt("Enter a decimal value");

let div1 = Math.floor(inputNumber / 2);
let div2 = Math.floor(div1 / 2);
let div3 = Math.floor(div2 / 2);
let div4 = Math.floor(div3 / 2);
let div5 = Math.floor(div4 / 2);
let div6 = Math.floor(div5 / 2);
let div7 = Math.floor(div6 / 2);


let binary1 = (inputNumber % 2);
let binary2 = (div1 % 2);
let binary3 = (div2 % 2);
let binary4 = (div3 % 2);
let binary5 = (div4 % 2);
let binary6 = (div5 % 2);
let binary7 = (div6 % 2);
let binary8 = (div7 % 2);

console.log(`The binary of ${inputNumber} is ${binary8}${binary7}${binary6}${binary5} ${binary4}${binary3}${binary2}${binary1}`);



//if(remainder1 == 10){
//    remainder1 = "A";
//}
//if(remainder1 == 11){
//    remainder1 = "B";
//}
//if(remainder1 == 12){
//    remainder1 = "C";
//}
//if(remainder1 == 13){
//    remainder1 = "D";
//}
//if(remainder1 == 14){
//    remainder1 = "E";
//}
//if(remainder1 == 15){
//    remainder1 = "F";
//}
