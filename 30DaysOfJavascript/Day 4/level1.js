/*
    Day 4 exercises,
    level 1,
    questions 1-4
*/

//question 1
let age = prompt('Enter your age: ') ;

if (age>18){
    console.log('You are old enough to drive.');
}else{
    console.log(`You are left with ${18-age} years to drive.`)
}

//question 2
let myAge=45, yourAge = prompt('Enter your age: ');

if (yourAge>myAge){
    console.log(`You are ${yourAge-myAge} years older than me`);
}else{
    console.log(`I am ${myAge-yourAge} years older than you`);
}


//question 3
let a = 4;
let b = 3;

//using if-else
if (a>b) {
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${b} is greater than ${a}`);
}

//using ternary operator
let result = (a>b)? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
console.log(result);

//question 4
let number = prompt('Enter a number: ');
console.log((number%2==0)? `${number} is an even number` : `${number} is an odd number`);