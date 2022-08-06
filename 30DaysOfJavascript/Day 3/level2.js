/*
    Day 3 exercises,
    level 2,
    questions 1-15
*/


// question 1
const base = prompt('Enter a base value');
const height = prompt('Enter a height value');

let areaOfTriangle = 0.5*base*height;
console.log(`The area of the triangle is ${areaOfTriangle}`);

//question 2
let sideA = parseInt(prompt('Enter side a: '));
let sideB = parseInt(prompt('Enter side b: '));
let sideC = parseInt(prompt('Enter side c: '));

let perimeterOfTriangle = sideA+sideB+sideC;
console.log(`The perimeter of the triangle is ${perimeterOfTriangle}`);

//question 3
let length=parseInt(prompt('Enter length: ')); 
let width=parseInt(prompt('Enter width: '));

areaOfRectangle = length*width;
perimeterOfRectangle = 2*(length+width);

console.log(`The perimeter of the rectangle is ${perimeterOfRectangle} and the area of the rectangle is ${areaOfRectangle} `);

//question 4
let radius = parseInt(prompt('Enter radius: '));

let areaOfCircle = Math.PI * radius**2;
console.log(`The perimeter of the triangle is ${areaOfCircle}`);

//question 6
let [x1, y1] = [2, 2];
let [x2, y2] = [6, 10];

slope = (y2-y1)/(x2-x1);
console.log(slope);

//question 9
let hours=parseInt(prompt('Enter hours: ')); 
let rate=parseInt(prompt('Enter rate per hour: '));

console.log(`Your weekly earning is ${hours*rate}`);

//question 10
let name='Abdulqudus';
console.log(name.length>7? 'Your name is long' : 'Your name is short')

//question 11
let firstName='Abdulqudus', lastName = 'Adamson';
console.log(firstName.length>lastName.length? `Your first name, ${firstName} is longer than your family name, ${lastName}` : 'Your family name, ${lastName} is longer than your first name, ${firstName}')

//question 12
let myAge = 250;
let yourAge = 25;

const ageDifference = myAge-yourAge;
console.log(`I am ${ageDifference} years older than you.`)

//question 13
let now = new Date();
let currentYear = now.getFullYear();
let userBirthYear = prompt('Enter birth year: ')
let authorisedAge = 18;
let age = currentYear-userBirthYear;

console.log(age>authorisedAge? `You are ${age}. You are old enough to drive` : `You are ${age}. You will be allowed to drive after ${authorisedAge-age}`);

//question 14
let yearsToLive = prompt('Enter number of years you live: ');
console.log(`You lived ${yearsToLive * 31536000} seconds`);

//question 15i
let present = new Date()
let year= present.getFullYear() ;
let month= present.getMonth() + 1 ;
let date= present.getDate() ;
let hour= present.getHours() ;
let minutes = present.getMinutes() ;

console.log(`${year}-0${month}-0${date} ${hour}:${minutes}`);

//question 15ii
console.log(`0${date}-0${month}-${year} ${hour}:${minutes}`);

//question 15iii
console.log(`0${date}/0${month}/${year} ${hour}:${minutes}`);
