/*
    Day 3 exercises,
    level 1,
    questions 1-7
*/


//question 1
let firstName='Lionel';
let lastName='Messi';
let country='Argentina';
let city='Buenos Aires';
let age=35;
let isMarried=true;
let year=1980;

console.log(typeof age);
console.log(typeof isMarried);

//question 2
// I did not understand this question as well

console.log(typeof '10' == 10);

//question 3
console.log(parseInt('9.8') == 10);

//question 4

let country1='Nigeria', age1=9, bool=true;
//truthy statement
'shine'? console.log('truthy') : console.log('falsy');
9? console.log('truthy') : console.log('falsy');
true ? console.log('truthy') : console.log('falsy');

//falsy statement
''? console.log('truthy') : console.log('falsy');
0? console.log('truthy') : console.log('falsy');
false ? console.log('truthy') : console.log('falsy');


//question 5
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!=='4');
console.log(4=='4');
console.log(4==='4');

//question 6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
'python'.includes('on') && 'dragon'.includes('on')? true : false;

//question 7
let today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());
