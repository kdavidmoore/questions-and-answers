var students = ['Keith', 'Will', 'Lazlo', 'Tristan', 'Joe', 'Curtis', 'Bogdan', 'Joshua', 'Patrick', 'Jeremyh', 'Kosawjn', 'Jon'];

var myArray = [
    {
        question: "What entity keeps a record between a URL and a given IP address?",
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
}

addQuestion(myArray, "Name one type of NoSQL database.", "MongoDB, Dynamo, CouchDB, etc.", 6);
addQuestion(myArray, "True or false? <strong> is a semantic tag.", "true", 5);
addQuestion(myArray, "What does SVG stand for?", "Scaled Vector Graphics", 3);
addQuestion(myArray, "True or false? The JavaScript Event Queue runs only once (when the page is loaded).", 2);
addQuestion(myArray, "In CSS, the code 'margin: 0 10px 10px 0;' is shorthand for what four lines of code?", 7);
addQuestion(myArray, "True or false? <div> elements are naturally set to inline display.", 4);
addQuestion(myArray, "In the box model, what is outside the content but inside the border?", "margin", 5);
addQuestion(myArray, "HTML elements are positioned ____ by default.", "static, relative, fixed, or absolute", 3);
addQuestion(myArray, "Set the z-index to ___ to position an element behind text.", "-1", 9);

console.dir(myArray);

function getQuestionStudent() {
    var randQuestion = Math.floor(Math.random() * myArray.length);
    var randStudent = Math.floor(Math.random() * students.length);
    var questionText = document.getElementById('question');
    questionText.innerHTML = myArray[randQuestion].question + ", " + students[randStudent];
    var difficultyText = document.getElementById('diff');
    difficultyText.innerHTML = "Difficulty: " + myArray[randQuestion].difficulty;
}
