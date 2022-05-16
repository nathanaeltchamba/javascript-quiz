
const quizQuestion = document.querySelector('#quizQuestion');
const results = document.querySelector('#results')
const results1 = document.querySelector('#results1')
const results2 = document.querySelector('#results2')
const results3 = document.querySelector('#results3')
const results4 = document.querySelector('#results4')
const results5 = document.querySelector('#results5')
const results6 = document.querySelector('#results6')
const results7 = document.querySelector('#results7')
const results8 = document.querySelector('#results8')
const results9 = document.querySelector('#results9')
const score = 10 // MAKE THE SCORES FOR THE QUIZ
// console.log(quizQuestion);

quizQuestion.addEventListener('submit', (e) => {

    e.preventDefault();

    answerText1 = e.target.answerText1.value.toUpperCase()
    answerText2 = e.target.answerText2.value.toUpperCase()
    answerText3 = e.target.answerText3.value.toUpperCase()
    answerText4 = e.target.answerText4.value.toUpperCase()
    answerText5 = e.target.answerText5.value.toUpperCase()
    answerText6 = e.target.answerText6.value.toUpperCase()
    answerText7 = e.target.answerText7.value.toUpperCase()
    answerText8 = e.target.answerText8.value.toUpperCase()
    answerText9 = e.target.answerText9.value.toUpperCase()
    answerText10 = e.target.answerText10.value.toUpperCase()
    // console.log(answerText1)
    let questions = [
        {
            question: 'Tim Lincecum wore number 55?',
            answer1: 'TRUE',
        },
        {
            question: 'Giants play football in San Francisco?',
            answer2: 'FALSE'
        },
        {
            question: 'The Bears and Cubs play in Chicago?',
            answer3: 'TRUE'
        }, 
        {
            question: 'The Bucks won the NBA Championship in 2021?',
            answer4: 'TRUE'
        },
        {
            question: 'The FIFA World Cup finalist from 2018 was Portugal?',
            answer5: 'FALSE'
        },
        {
            question: 'Lionel Messi wears number 30 in PSG?',
            answer6: 'TRUE'
        },
        {
            question: 'The Blue Jays play baseball at home in Texas?',
            answer7: 'FALSE'
        },
        {
            question: 'The Giants won the World Series in 2015?',
            answer8: 'FALSE'
        },
        {
            question: 'LeBron was drafted at the age of 18?',
            answer9: 'TRUE'
        },
        {
            question: 'The Dallas Cowboys will win the Super bowl next year?',
            answer10: 'FALSE'
        }
        
        
    ]
    

    let questionSolution1 = (answer1) => {
        if (answerText1 === (answer1)) {

            console.log('That is Correct')
        } else {
            // console.log(answerText1)
            // console.log(answer)
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution2 = (answer2) => {
        if (answerText2 === (answer2)) {
            console.log('That is Correct')
           
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution3 = (answer3) => {
        if (answerText3 === (answer3)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution4 = (answer4) => {
        if (answerText4 === (answer4)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution5 = (answer5) => {
        if (answerText5 === (answer5)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution6 = (answer6) => {
        if (answerText6 === (answer6)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution7 = (answer7) => {
        if (answerText7 === (answer7)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution8 = (answer8) => {
        if (answerText8 === (answer8)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution9 = (answer9) => {
        if (answerText9 === (answer9)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    let questionSolution10 = (answer10) => {
        if (answerText10 === (answer10)) {
            console.log('That is Correct')
        } else {
            console.log('That is Incorrect')
        }
        
    }
    
    // <p class="resultAnswer mt-3"><strong>Answer was:</strong> TRUE</p>
    // <p><strong>Your Answer:</strong> False</p>



    let resultAnswer = document.createElement('p');
    resultAnswer.classList.add('resultAnswer');
    results.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[0].answer1}</p>
    <p><strong>Your Answer:</strong> ${answerText1}</p>`

    let resultAnswer1 = document.createElement('p');
    resultAnswer1.classList.add('resultAnswer1');
    results1.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[1].answer2}</p>
    <p><strong>Your Answer:</strong> ${answerText2}</p>`

    let resultAnswer2 = document.createElement('p');
    resultAnswer2.classList.add('resultAnswer2');
    results2.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[2].answer3}</p>
    <p><strong>Your Answer:</strong> ${answerText3}</p>`

    let resultAnswer3 = document.createElement('p');
    resultAnswer3.classList.add('resultAnswer3');
    results3.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[3].answer4}</p>
    <p><strong>Your Answer:</strong> ${answerText4}</p>`

    let resultAnswer4 = document.createElement('p');
    resultAnswer4.classList.add('resultAnswer4');
    results4.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[4].answer5}</p>
    <p><strong>Your Answer:</strong> ${answerText5}</p>`

    let resultAnswer5 = document.createElement('p');
    resultAnswer5.classList.add('resultAnswer5');
    results5.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[5].answer6}</p>
    <p><strong>Your Answer:</strong> ${answerText6}</p>`

    let resultAnswer6 = document.createElement('p');
    resultAnswer6.classList.add('resultAnswer6');
    results6.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[6].answer7}</p>
    <p><strong>Your Answer:</strong> ${answerText7}</p>`

    let resultAnswer7 = document.createElement('p');
    resultAnswer7.classList.add('resultAnswer7');
    results7.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[7].answer8}</p>
    <p><strong>Your Answer:</strong> ${answerText8}</p>`

    let resultAnswer8 = document.createElement('p');
    resultAnswer8.classList.add('resultAnswer8');
    results8.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[8].answer9}</p>
    <p><strong>Your Answer:</strong> ${answerText9}</p>`

    let resultAnswer9 = document.createElement('p');
    resultAnswer9.classList.add('resultAnswer9');
    results9.innerHTML = `
    <p class="resultAnswer mt-3"><strong>Answer was:</strong> ${questions[9].answer10}</p>
    <p><strong>Your Answer:</strong> ${answerText10}</p>`
 
    
    quizLength = questions.length();
    counter = 0;
    // quizResults = yourScore out of quizLength
    // yourScore = sum of 'that is correct' from a list of solutions
    // first, make a solutions list that will hold questionSolution1-10
    // then make yourScore = sum of questionSolution
    

    questionSolution1(questions[0].answer1);
    questionSolution2(questions[1].answer2);
    questionSolution3(questions[2].answer3);
    questionSolution4(questions[3].answer4);
    questionSolution5(questions[4].answer5);
    questionSolution6(questions[5].answer6);
    questionSolution7(questions[6].answer7);
    questionSolution8(questions[7].answer8);
    questionSolution9(questions[8].answer9);
    questionSolution10(questions[9].answer10);

})


// How do I make this less repetitive