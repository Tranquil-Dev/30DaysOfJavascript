/*
    Day 2 exercises,
    level 3,
    questions 1-4
*/

//question 1
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let word = 'love';

/* I created a function that will return the number of times
  a word occur in a sentence. It takes in 2 arguments
*/

let count = (theSentence, theWord) =>{  

    let replaceWords = theSentence.replace('love.', 'love . ');
    let splittedWords = replaceWords.split(' ');
    let count = 0;
    
    for (let word of splittedWords){
        if (theWord == word) count++;
    }

    return count;
}


let result = count(sentence, word);
console.log(result);


//question 2
let sentence1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence1.match(/because/g));

//question 3
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const newSentence = sentence2.replace(/[@#%&;$]/g, "");


//question 4
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let [salaryPerMonth, annualBonus, coursesPerMonth] = text.match(/\d+/g);

let annualSalary = salaryPerMonth*12;
let annualCourses = coursesPerMonth*12;

let totalEarnings = parseInt(annualBonus) + parseInt(annualCourses) + parseInt(annualSalary);
console.log(totalEarnings);