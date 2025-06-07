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
const questionBox = prompt('how old are you?', 30);
console.log(`im ${questionBox} years old`);
const e = confirm('is it rainy today?');
alert(e);
