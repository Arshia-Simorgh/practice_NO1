'use strict';
console.log('hello world, this is the first exercise');
// this is an one line Comment
//we use const for unchangable variables
const birthdayDate = '30.10.2000';
const RED_COLOR = '#F00';
let message = 'this is temporary';
message = 'welcome back';
console.log(message, birthdayDate);
let admin = 'john';
let firstName;
firstName = admin;
console.log(firstName);
console.log(`the person who sent the mail was ${firstName}`);
const thisYear = 2025;
console.log(`result of my age will be ${thisYear - 2000}`);
const a = null;
let b;
console.log(typeof thisYear);
// typeof null is object and this is an old error in JS
// typeof is an operator, not a function
console.log(typeof a);
console.log(typeof b);
// alert, prompt, confirm are special browser function to interact with visitors
// const questionBox = prompt('how old are you?', 30);
// console.log(`im ${questionBox} years old`);
// const e = confirm('is it rainy today?');
// alert(e);
// -----------------------
// string conversion
let convertToString = 1998;
let $convertToString = String(convertToString);
let _convertToString = convertToString.toString();
let h = true;
console.log(typeof convertToString);
console.log(typeof $convertToString);
console.log(typeof _convertToString);
console.log(typeof String(h));
let numberConversion = null;
let numberConversion2 = Number(numberConversion);
console.log(typeof numberConversion2);
let numberConversion3 = undefined;
console.log(Number(numberConversion3));
console.log(Number(true));
console.log(Number(numberConversion));
console.log(Boolean(''));
console.log(Boolean('hey'));
console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(Boolean(undefined));
console.log(Boolean(null));
// we have five falsy values which are false in Boolean conversion
// they are 0, undefined, null, NaN, ""
// operand are what operator applies to
// in 4 * 5, the left operand is 4 and the right operand is 5
console.log(10 + '65' + '12');
console.log(5 + 3 + 23 + '13');
console.log('10' + '3' + 12 + 5);
console.log(5 + 6 + 3);
console.log('10' - '4');
//just operator + changes the data type to string
// other arithmetic operators output as number
const unary = '10';
const unary2 = '5';
console.log(unary + unary2);
// if we put + operator before a string or boolean data type, it converts to number like Number()
console.log(+unary + +unary2);
// -----------------------------------
let counter = 5;
counter++;
let counter2 = 10;
counter2--;
console.log(counter, counter2);
// increament and decreament are just applied to variables, not numbers
// let m = +prompt('First number?', 1);
// let n = +prompt('Second number?', 2);
// console.log(m + n);
console.log('0' === 0);
console.log('0' == 0);
console.log('55' > 54);
console.log(null > 10);
console.log(null == undefined);
console.log('' === null);
console.log(null === undefined);
