/*
    Day 3 exercises,
    level 3,
    question 1
*/




let present = new Date()
let year= present.getFullYear() ;
let month= present.getMonth() + 1 ;
let date= present.getDate() ;
let hour= present.getHours() ;
let minutes = present.getMinutes() ;

console.log(`${year}-0${month}-0${date} ${hour}:${minutes}`);