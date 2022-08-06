/* Day 2 exercises,
    level 2,
    questions 1-11
*/

//question 1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

//question 2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`)

//question 3
 
let number = parseInt('10');
console.log(typeof (number) === typeof 10);
 
 //question 4
 console.log(Math.round(parseFloat(9.8)));

 //question 5
 let word1='python', word2='jargon';
 console.log(word1.includes('on') && word2.includes('on'));

//question 6
let sentence1 = 'I hope this course is not full of jargon';
console.log(sentence1.includes('jargon'));

//question 7
console.log(Math.floor(Math.random()*101));

//question 8
console.log( Math.random() * (101 - 50) + 50);

//question 9
console.log(Math.random()* 256);

//question 10
let characters = 'JavaScript';
let count = characters.length;
let rand = Math.floor(Math.random() * count);
console.log(characters[rand]);

//question 11
console.log(' 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125');

//question 12
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.substr(31, 23));









