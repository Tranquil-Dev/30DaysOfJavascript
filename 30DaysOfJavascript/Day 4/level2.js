/*
    Day 4 exercises,
    level 2,
    questions 1-3
*/


//question 1
score = parseInt(prompt('Enter your score: '));

if (score>=80 && score<=100){
    console.log('A');
}
if (score>=70 && score<=79){
    console.log('B');
}
if (score>=60 && score<=69){
    console.log('C');
}
if (score>=50 && score<=59){
    console.log('D');
}
if (score>=0 && score<=49){
    console.log('F');
}

//question 2
let autumn = ['september', 'october','november'];
let winter = ['december', 'january','february'];
let spring = ['march', 'april','may'];
let summer = ['june', 'july','august'];

let season = prompt('What month are we? ').toLowerCase();

if (autumn.includes(season)) console.log('The season is Autumn');
if (winter.includes(season)) console.log('The season is Winter');
if (spring.includes(season)) console.log('The season is Spring');
if (summer.includes(season)) console.log('The season is Summer');

//question 3
let day = prompt('What day is it? ').toLowerCase();
let weekends = ['saturday', 'sunday'];
console.log(weekends.includes(day)? `${day} is a weekend` : `${day} is a working day`)

