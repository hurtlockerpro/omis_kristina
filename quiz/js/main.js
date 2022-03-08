
let question = document.getElementById('question')
let answersBox = document.getElementById('answers')
let progressBar = document.getElementById('progress-bar')

let questions = [
    { // 0
        question: "Question 1 ?",
        answers: ["answer 11", "answer 12", "answer 13"],
        rightAnswer: 1, // index
        results: -1, // index
    },
    { // 1
        question: "Question 2 ?",
        answers: ["answer 21", "answer 22", "answer 23", "answer 24"],
        rightAnswer: 2, // index
        results: -1, // index
    },
    {
        question: "Question 3 ?",
        answers: ["answer 31", "answer 32"],
        rightAnswer: 0, // index
        results: -1, // index
    },
]

let currentQuestionIndex = 0

function getNextQuestionIndex()
{   
    if (currentQuestionIndex >= questions.length) {
        return currentQuestionIndex = questions.length
    } else {
        return currentQuestionIndex = currentQuestionIndex + 1
    }
}

function getPreviousQuestionIndex()
{
    if (currentQuestionIndex <= 0){
        return currentQuestionIndex = 0
    } else {
        return currentQuestionIndex = currentQuestionIndex - 1
    }
}

document.getElementById("btnPrevious").addEventListener('click', function(event){

    let index = getPreviousQuestionIndex()
    console.log("previous: ",  index);

    question.innerText = getQuestion()
    answersBox.innerHTML = getAnswers()
    animateProgressBar(index)
})

document.getElementById("btnNext").addEventListener('click', function(event){
    
    saveAnswer() // NB!!!! must be before next question show
    
    let index = getNextQuestionIndex()
    console.log("next: ",  index);

    if (currentQuestionIndex <= questions.length - 1)
    {
        question.innerText = getQuestion()
        answersBox.innerHTML = getAnswers()
        animateProgressBar(index)
        
    }
    else if(currentQuestionIndex >= questions.length)
    {
        animateProgressBar(index)
        console.log('last question. Showing results: ' + countCorrectAnswers());
        alert(countCorrectAnswers())
    } 
    
})

function getQuestion(){
    return questions[currentQuestionIndex].question
}

function getAnswers(){

    let answers = questions[currentQuestionIndex].answers
    let htmlAnswers = ''
    for (let index = 0; index < answers.length; index++) {
        const element = answers[index];
        htmlAnswers += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radioAnswers" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                ${ element }
                </label>
            </div>`
    }

    return htmlAnswers
}

function animateProgressBar(partsCount){
    let currentProgressBarWidth = (100 / questions.length) * partsCount
    if (partsCount >= 1)
    {
        progressBar.style.width = currentProgressBarWidth.toFixed(2) + '%'
        progressBar.innerText = currentProgressBarWidth.toFixed(2) + '%'
    }
}

function saveAnswer(){
    let inputAnswers = answersBox.querySelectorAll('input[name="radioAnswers"]')
    for (let index = 0; index < inputAnswers.length; index++) {
        
        if (inputAnswers[index].checked == true)
        {
            questions[currentQuestionIndex].results = index
            console.log("checked: ", inputAnswers[index].checked);
        }
    }
}

function countCorrectAnswers(){

    let correctAnswersCount = 0
    for (let index = 0; index < questions.length; index++) {
        if(questions[index].rightAnswer == questions[index].results)
        {
            correctAnswersCount++
        }
    }
    return 'You answered correctly ' + correctAnswersCount + ' of ' + questions.length 
}

question.innerText = getQuestion()
answersBox.innerHTML = getAnswers()