let userQuestion = prompt("Ask your question if you dare");
const answers = [" I don't care", " No", " Yes", " Of course", " Maybe", " Nah", " LOL come back later"];
const randomAnswers = Math.floor(Math.random() * answers.length)
function test(answers){
    if (answers != undefined){
        alert(" Answer:" + answers[randomAnswers]);
    }else{
        alert("You broke it...")
        }
    }
    test(answers)
    function question(userQuestion){
    if (userQuestion != null){
        alert( "You asked this question: " + userQuestion + ", but why did you ask that question?");
    }else{
        alert("You broke it...")
        }
    };
    question(userQuestion)
