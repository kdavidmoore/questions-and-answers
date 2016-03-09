var students = ['Keith', 'Will', 'Laz', 'Tristan', 'Joe', 'Curtis', 'Bogdan', 'Joshua', 'Patrick', 'Jeremy', 'Koshan', 'Jon'];

/* var myArray = [
    {
        question: "What entity keeps a record between a URL and a given IP address",
        answer: "ICANN",
        difficulty: 5
    }
]

function addQuestion(theArray, myQuestion, myAnswer, myDifficulty) {
    var newQuestion = {
        question: myQuestion,
        answer: myAnswer,
        difficulty: myDifficulty
    }
    theArray.push(newQuestion);
} */

function classQuizItem(myQuestion, myAnswer, myDifficulty) {
    this.question = myQuestion;
    this.answer = myAnswer;
    this.difficulty = myDifficulty;
}

/* addQuestion(myArray, "Name one type of NoSQL database", "MongoDB, Dynamo, CouchDB, etc.", 6);
addQuestion(myArray, "True or false? strong is a semantic tag", "true", 5);
addQuestion(myArray, "What does SVG stand for", "Scaled Vector Graphics", 3);
addQuestion(myArray, "True or false? The JavaScript Event Queue runs only once (when the page is loaded)", "false", 2);
addQuestion(myArray, "In CSS, the code 'margin: 0 10px 10px 0' is shorthand for ____ lines of code", "four", 1);
addQuestion(myArray, "True or false? div elements are naturally set to inline display", "false", 4);
addQuestion(myArray, "In the box model, what is outside the content but inside the border", "margin", 5);
addQuestion(myArray, "HTML elements are positioned ____ by default", "static", 3);
addQuestion(myArray, "Set the z-index to ____ to position an element behind text", "-1", 9); */

var questionArray = [];
var theAnswer = "";

questionArray.push(new classQuizItem("What entity keeps a record between a URL and a given IP address", "ICANN", 5));
questionArray.push(new classQuizItem("Name one type of NoSQL database", "MongoDB, Dynamo, CouchDB, etc.", 6));
questionArray.push(new classQuizItem("True or false? strong is a semantic tag", "true", 5));
questionArray.push(new classQuizItem("What does SVG stand for", "Scaled Vector Graphics", 3));
questionArray.push(new classQuizItem("True or false? The JavaScript Event Queue runs only once (when the page is loaded)", "false", 2));
questionArray.push(new classQuizItem("In CSS, the code 'margin: 0 10px 10px 0' is shorthand for ____ lines of code", "four", 1));
questionArray.push(new classQuizItem("True or false? div elements are naturally set to inline display", "false", 4));
questionArray.push(new classQuizItem("In the box model, what is outside the content but inside the border", "margin", 5));
questionArray.push(new classQuizItem("HTML elements are positioned ____ by default", "static", 3));
questionArray.push(new classQuizItem("Set the z-index to ____ to position an element behind text", "-1", 9));

console.dir(questionArray);

function getQuestionAndStudent() {
    var randQuestion = Math.floor(Math.random() * questionArray.length);
    var randStudent = Math.floor(Math.random() * students.length);
    var questionText = document.getElementById('question');
    questionText.innerHTML = questionArray[randQuestion].question + ", " + students[randStudent] + "?";
    var difficultyText = document.getElementById('diff');
    difficultyText.innerHTML = "Difficulty: " + questionArray[randQuestion].difficulty.toString();
    theAnswer = questionArray[randQuestion].answer;
}

function showAnswer() {
    var questionText = document.getElementById('question');
    var difficultyText = document.getElementById('diff');
    difficultyText.innerHTML = '';
    questionText.innerHTML = '';
    questionText.innerHTML = theAnswer;
}
