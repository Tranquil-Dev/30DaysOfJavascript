/*
    Day 4 exercises,
    level 3,
    question 1
*/


//question 1

let month30 = ['september', 'april', 'june', 'november'];
let month28 = ['february'];
let month31 = ['january', 'march', 'may', 'july', 'august', 'october', 'december'];

let month = prompt('Enter a month: ');

if (month30.includes(month)){
    console.log(`${month} has 30 days.`)
} 
if (month31.includes(month)){
    console.log(`${month} has 31 days.`)
} 
if (month28.includes(month)){
    console.log(`${month} has 28 days.`)
} 