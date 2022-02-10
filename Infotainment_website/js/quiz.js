const quizData = [
    {
        question: " Where is Akbar's Tomb located in India ?",
        A: "Ghaziabad",
        B: "Arga",
        C: "Noida",
        D: "Allahabad",
        correct: "B",
    },
    {
        question: "Where is Sun Temple located?",
        A: "Konark",
        B: "Sambalpur",
        C: "Rourkela",
        D:  "Belgam",
        correct: "A",
    },
    {
        question: "Where is Elephanta Caves located?",
        A: "Madurai",
        B: "Vizag",
        C: "Mumbai",
        D: "Bhopal",
        correct: "C",
    },
    {
        question: "Where is Gol-Gumbaz located?",
        A: "Telangana",
        B: "Rajastan",
        C: "Maharashtra",
        D: "Karnataka",
        correct: "D",
    },
{
    question: "Where is Kangra Fort located in India?",
    A: "Uttar Pradesh",
    B: "Himachal Pradesh",
    C: "Rajastan",
    D: "Haryana",

},

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const A_text = document.getElementById('A_text')
const B_text = document.getElementById('B_text')
const C_text = document.getElementById('C_text')
const D_text = document.getElementById('D_text')
const submitBtn = document.getElementById('submit')


let currentQuiz =0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    A_text.innerText = currentQuizData.A
    B_text.innerText = currentQuizData.B
    C_text.innerText = currentQuizData.C
    D_text.innerText = currentQuizData.D
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
}
)