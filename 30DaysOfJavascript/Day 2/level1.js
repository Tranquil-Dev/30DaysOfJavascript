/* Day 2 exercises,
   level 1,
   questions 1-25
 */

//question 1
let challenge = '30 Days Of JavaScript';

//question 2
console.log(challenge);

//question 3
let numberOfWords = challenge.length;
console.log(numberOfWords);

//question 4
let upperCase = challenge.toUpperCase();
console.log(upperCase);

//question 5
let lowerCase = challenge.toLowerCase();
console.log(lowerCase);

//question 6
let firstWord = challenge.substring(0, 1);
console.log(firstWord);

//question 7
let phrase = challenge.slice(2, );
console.log(phrase);

//question 8
let contain = challenge.includes('Script');
console.log(contain);

//question 9
let wordSplit1 = challenge.split('');
console.log(wordSplit1);

//question 10
let wordSplit2 = challenge.split(' ');
console.log(wordSplit2);

//question 11
let words = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let commaSplit = words.split(',');
console.log(commaSplit);

//question 12
let wordReplace = challenge.replace('JavaScript', 'Python');
console.log(wordReplace);

//question 13
let character = challenge.charAt(15);
console.log(character);

//question 14
let asciiNumber = challenge.charCodeAt('J')
console.log(asciiNumber);

//question 15
let firstOccurence1 = challenge.indexOf('a');
console.log(firstOccurence1);

//question 16
let lastOccurence1 = challenge.lastIndexOf('a');
console.log(lastOccurence1);

//question 17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let firstOccurence2 = sentence.indexOf('because');
console.log(firstOccurence2);

//question 18
let lastOccurence2 = sentence.lastIndexOf('because')
console.log(lastOccurence2);

//question 19
let usingSearch = sentence.search('because');
console.log(usingSearch);

//question 20
let laptopModel = ' Hewlett Packard '
let trimmer = laptopModel.trim();
console.log(trimmer);

//question 21
let starter = challenge.startsWith('30');
console.log(starter);

//question 22
let end = challenge.endsWith('pt');
console.log(end);

//question 23
let inLetter = challenge.match('a');
console.log(inLetter);

//question 24
let merger = '30 Days of'.concat('JavaScript');
console.log(merger);

//question 25
let repeat = challenge.repeat(2);
console.log(repeat);

