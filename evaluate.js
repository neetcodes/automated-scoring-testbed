function has(input, answers) {
    let retval = 0;
    answers.forEach(answer => {
        if (input.indexOf(answer) > -1) {
            retval = 1;
        }
    });
    return retval;
}

/*var evaluationTable = {
    "q1": x => 1 * has(x, ["test", "123"]) 
             + 2 * (has(x, ["lol", "yay"]) && has(x, ["lmao"])),

    "q2": x => 1 * (has(x, ["himitsu", "hidden"]) && has(x, ["soshiki", "society"]))
             + 2 * has(x, ["nerv", "seele"])
}*/

function getAnswers(questions) {
    let answers = {};
    questions.forEach(q => {
        let ans = document.getElementById(q).value;
        answers[q] = ans;
    });
    return answers;
}

function evaluateAnswers() {
    eval(document.getElementById("evaltable").value);
    let questions = Object.keys(evaluationTable);
    let answers = getAnswers(questions);
    questions.forEach(q => {
        let scoreLabel = document.getElementById(q + "_score");
        scoreLabel.innerHTML = "Score: " + evaluationTable[q](answers[q]).toString();
    });
}
