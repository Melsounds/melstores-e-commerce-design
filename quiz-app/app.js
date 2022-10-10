const quizData = [
    {
        question: 'How many Known Planet to we have in the MILKY WAY GALAXY?',
        a: '6',
        b: '10',
        c: '100',
        d: '9',
        /*e: 'None of the above',*/
        correct: 'd'
    },
    {
        question: 'Who is the current President of the Nigeria?',
        a: 'Mohammadu Buhari',
        b: 'Nnadi Melvin',
        c: 'Donald Thrump',
        d: 'Goodluck Jonathan',
        /*e: 'None of the above',*/
        correct: 'a'
    },
    {
        question: 'What is the most used Programming Language in 2022?',
        a: 'Java',
        b: 'Python',
        c: 'Javascript',
        d: 'C#',
        /*e: 'PHP',*/
        correct: 'c'
    },
    {
        question: 'What Brand of Car did Elon Musk make?',
        a: 'Mercedez',
        b: 'Tesla',
        c: 'Toyota',
        d: 'Nissan',
        /*e: 'Honda',*/
        correct: 'b'
    },
    {
        question: 'What year was Javascript Launched?',
        a: '2000',
        b: '1995',
        c: '2020',
        d: '2022',
        /*e: 'None of the above',*/
        correct: 'b'
    },
];

    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

   currentQuestion++;
}
