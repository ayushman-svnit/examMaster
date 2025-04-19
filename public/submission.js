let mode = document.getElementById("theme-toggle")
let icon = document.getElementById("theme-icon");

let ques = [];
let submissions = []
let hostid = document.querySelector("#hostid").innerText;
console.log(hostid);
let user_id = document.querySelector("#user_id").innerText;
console.log(user_id);

mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const r1 = await axios.post(`/crud/ques/${hostid}/${user_id}`);
    ques=r1.data.Ques;
    console.log(ques);
    const r2 = await axios.post(`/crud/submission/${hostid}/${user_id}`);
    submissions=r2.data.Sub;
    console.log(submissions);
    await initialise();
});

async function initialise() {
    let correct = [];
    let incorrect = [];
    let unatm = [];

    let correct_math = 0;
    let incorrect_math = 0;
    let unatm_math = 0;

    let correct_phy = 0;
    let incorrect_phy = 0;
    let unatm_phy = 0;

    let correct_chem = 0;
    let incorrect_chem = 0;
    let unatm_chem = 0;

    for (let i = 0; i < ques.length; i++) {
        let div = document.createElement("div");
        div.innerText = i + 1;
        div.classList.add("navdiv");
        if (submissions[i].submittedAns == "" && submissions[i].submittedInput == null) {
            unatm.push(
                {
                    index: i,
                    Ques: ques[i],
                    Sub: submissions[i],
                    marks: 0
                }
            )
            div.classList.add("unatm");
            if(ques[i].subject == "math")
                unatm_math++;
            else if(ques[i].subject == "phy")
                unatm_phy++;
            else
                unatm_chem++;
        }
        else if (ques[i].quesType == 'Num') {
            if (ques[i].input == submissions[i].submittedInput) {
                correct.push(
                    {
                        index: i,
                        Ques: ques[i],
                        Sub: submissions[i],
                        marks: 0
                    }
                )
                div.classList.add("correct");
                if(ques[i].subject == "math")
                    correct_math++;
                else if(ques[i].subject == "phy")
                    correct_phy++;
                else
                    correct_chem++;
            }
            else {
                incorrect.push(
                    {
                        index: i,
                        Ques: ques[i],
                        Sub: submissions[i],
                        marks: 0
                    }
                )
                div.classList.add("incorrect");
                div.classList.add("correct");
                if(ques[i].subject == "math")
                    incorrect_math++;
                else if(ques[i].subject == "phy")
                    incorrect_phy++;
                else
                    incorrect_chem++;
            }
        }
        else if (ques[i].quesType == 'SCQ') {
            if (ques[i].ans == submissions[i].submittedAns) {
                correct.push(
                    {
                        index: i,
                        Ques: ques[i],
                        Sub: submissions[i],
                        marks: 0
                    }
                )
                div.classList.add("correct");
                div.classList.add("correct");
                if(ques[i].subject == "math")
                    correct_math++;
                else if(ques[i].subject == "phy")
                    correct_phy++;
                else
                    correct_chem++;
            }
            else {
                incorrect.push(
                    {
                        index: i,
                        Ques: ques[i],
                        Sub: submissions[i],
                        marks: 0
                    }
                )
                div.classList.add("incorrect");
                div.classList.add("correct");
                if(ques[i].subject == "math")
                    incorrect_math++;
                else if(ques[i].subject == "phy")
                    incorrect_phy++;
                else
                    incorrect_chem++;
            }
        }
        else if (ques[i].quesType == 'MCQ') {
            let j = 0;
            for (; j < submissions[i].submittedAns.length; j++) {
                if (ques[i].ans.indexOf(submissions[i].submittedAns[j]) == -1) break;
            }
            if (j == submissions[i].submittedAns.length) {
                correct.push(
                    {
                        index: i,
                        Ques: ques[i],
                        Sub: submissions[i],
                        marks: 0
                    }
                )
                div.classList.add("correct");
                div.classList.add("correct");
                if(ques[i].subject == "math")
                    correct_math++;
                else if(ques[i].subject == "phy")
                    correct_phy++;
                else
                    correct_chem++;
            }
            else {
                incorrect.push(
                    {
                        index: i,
                        Ques: ques[i],
                        Sub: submissions[i],
                        marks: 0
                    }
                )
                div.classList.add("incorrect");
                div.classList.add("correct");
                if(ques[i].subject == "math")
                    incorrect_math++;
                else if(ques[i].subject == "phy")
                    incorrect_phy++;
                else
                    incorrect_chem++;
            }
        }
        if (ques[i].subject == "math") document.querySelector("#math").appendChild(div);
        else if (ques[i].subject == "phy") document.querySelector("#phy").appendChild(div);
        else if (ques[i].subject == "chem") document.querySelector("#chem").appendChild(div);
    }

    let score = 0;

    function updateScore(q, s, status) {
        if (status == 'correct') {
            if (q.quesType == 'SCQ') {
                score += 3;
                q.marks = 3;
            }
            else if (q.quesType == 'MCQ') {
                if (q.ans.length == s.submittedAns.length) {
                    score += 4;
                    q.marks = 4;
                }
                else {
                    score += s.submittedAns.length;
                    q.marks = s.submittedAns.length;
                }
            }
            else {
                score += 4;
                q.marks = 4;
            }
        }
        else if (status == 'incorrect') {
            if (q.quesType == 'SCQ') {
                score -= 1;
                q.marks = -1;
            }
            else if (q.quesType == 'MCQ') {
                score -= 2;
                q.marks = -2;
            }
        }
    }
    for (let i = 0; i < correct.length; i++) {
        updateScore(correct[i].Ques, correct[i].Sub, 'correct');
    }
    for (let i = 0; i < incorrect.length; i++) {
        updateScore(incorrect[i].Ques, incorrect[i].Sub, 'incorrect');
    }

    let percentCorrect = (correct.length / ques.length * 100).toFixed(5);
    let percentIncorrect = (incorrect.length / ques.length * 100).toFixed(5);
    let percentUnatm = (100 - percentCorrect - percentIncorrect).toFixed(5);

    let percentCorrectMath = (correct_math / (ques.length / 3) * 100).toFixed(5);
    let percentIncorrectMath = (incorrect_math / (ques.length / 3) * 100).toFixed(5);
    let percentUnatmMath = (100 - percentCorrectMath - percentIncorrectMath).toFixed(5);

    let percentCorrectPhy = (correct_phy / (ques.length / 3)* 100).toFixed(5);
    let percentIncorrectPhy = (incorrect_phy / (ques.length / 3)* 100).toFixed(5);
    let percentUnatmPhy = (100 - percentCorrectPhy - percentIncorrectPhy).toFixed(5);

    let percentCorrectChem = (correct_chem / (ques.length / 3) * 100).toFixed(5);
    let percentIncorrectChem = (incorrect_chem / (ques.length / 3) * 100).toFixed(5);
    let percentUnatmChem = (100 - percentCorrectChem - percentIncorrectChem).toFixed(5);

    let accuracy = correct.length / (correct.length + incorrect.length) * 100;
    let accuracy_math = correct_math / (correct_math + incorrect_math) * 100;
    let accuracy_phy = correct_phy / (correct_phy + incorrect_phy) * 100;
    let accuracy_chem = correct_chem / (correct_chem + incorrect_chem) * 100;

    document.querySelector("#score").innerText = `Total score : ${score}`;

    document.querySelector("#percentCorrect").innerText = `Percentage Correct : ${percentCorrect} %`;
    document.querySelector("#percentIncorrect").innerText = `Percentage Incorrect : ${percentIncorrect} %`;
    document.querySelector("#percentUnatm").innerText = `Percentage Unattempted : ${percentUnatm} %`;
    document.querySelector("#accuracy").innerText = `Accuracy : ${accuracy} %`;

    document.querySelector("#percentCorrectMath").innerText = `Percentage Correct : ${percentCorrectMath} %`;
    document.querySelector("#percentIncorrectMath").innerText = `Percentage Incorrect : ${percentIncorrectMath} %`;
    document.querySelector("#percentUnatmMath").innerText = `Percentage Unattempted : ${percentUnatmMath} %`;
    document.querySelector("#accuracy_math").innerText = `Accuracy : ${accuracy_math} %`;

    document.querySelector("#percentCorrectPhy").innerText = `Percentage Correct : ${percentCorrectPhy} %`;
    document.querySelector("#percentIncorrectPhy").innerText = `Percentage Incorrect : ${percentIncorrectPhy} %`;
    document.querySelector("#percentUnatmPhy").innerText = `Percentage Unattempted : ${percentUnatmPhy} %`;
    document.querySelector("#accuracy_phy").innerText = `Accuracy : ${accuracy_phy} %`;

    document.querySelector("#percentCorrectChem").innerText = `Percentage Correct : ${percentCorrectChem} %`;
    document.querySelector("#percentIncorrectChem").innerText = `Percentage Incorrect : ${percentIncorrectChem} %`;
    document.querySelector("#percentUnatmChem").innerText = `Percentage Unattempted : ${percentUnatmChem} %`;
    document.querySelector("#accuracy_chem").innerText = `Accuracy : ${accuracy_chem} %`;

    function predictJeeAdvancedRank(score) {
        if (score >= 301) return "Rank: 1 to 100";
        else if (score >= 258) return "Rank: 101 to 500";
        else if (score >= 233) return "Rank: 501 to 1000";
        else if (score >= 219) return "Rank: 1001 to 1500";
        else if (score >= 207) return "Rank: 1501 to 2000";
        else if (score >= 199) return "Rank: 2001 to 2500";
        else if (score >= 189) return "Rank: 2501 to 3000";
        else if (score >= 181) return "Rank: 3001 to 4000";
        else if (score >= 175) return "Rank: 4001 to 4500";
        else if (score >= 170) return "Rank: 4501 to 5000";
        else if (score >= 160) return "Rank: 5001 to 6000";
        else if (score >= 150) return "Rank: 6001 to 7000";
        else if (score >= 140) return "Rank: 7001 to 8000";
        else if (score >= 130) return "Rank: 8001 to 9000";
        else if (score >= 120) return "Rank: 9001 to 10000";
        else if (score >= 110) return "Rank: 10001 to 11000";
        else if (score >= 100) return "Rank: 11001 to 12000";
        else return "Rank: 12000+ (Very low chance)";
    }

    document.querySelector("#rank").innerHTML = `Predicted ${predictJeeAdvancedRank(score)}`;

    //JS for popup container 
    let box = document.querySelector(".box");
    let navdivs = document.querySelectorAll(".navdiv");
    let cross = document.querySelector("#cross");
    let instruction = document.querySelector("#instruction");
    let sec1 = "http://localhost:8000/sec-1.png";
    let sec2 = "http://localhost:8000/sec-2.png";
    let sec3 = "http://localhost:8000/sec-3.png";

    cross.addEventListener("click", () => {
        box.classList.toggle("box");
    });

    navdivs.forEach((div) => {
        div.addEventListener("click", () => {
            box.classList.toggle("box");
            let index = div.innerText - 1;
            if(!div.classList.contains("box"))display(index);
        });
    });

    function display(index) {
        let obj = ques[index];
        let S = submissions[index];

        //to display instructions
        if (obj.quesType === "SCQ")
            instruction.innerHTML = `<img src="${sec1}" alt="Instructions">`
        else if (obj.quesType === 'MCQ')
            instruction.innerHTML = `<img src="${sec2}" alt="Instructions">`
        else
            instruction.innerHTML = `<img src="${sec3}" alt="Instructions">`

        //to display ques number;
        document.querySelector("#quesNum").innerText = index + 1;

        //to display ques
        let q = document.querySelector(".ques");
        if (obj.isImg == true) {
            q.innerHTML = `<img src=${obj.quesImg} alt="Question">`;
        }
        else {
            q.innerHTML = `<p>${obj.ques}</p>`;
        }

        //to display options
        let opt = document.querySelector(".options");
        if (obj.quesType == 'SCQ' || obj.quesType == 'MCQ') {
            if (obj.isOptImg == true) {
                opt.innerHTML = `
                <div id="opt1"><img src=${obj.opt1Img} alt="opt1 Image"></div>
                <div id="opt2"><img src=${obj.opt2Img} alt="opt2 Image"></div>
                <div id="opt3"><img src=${obj.opt3Img} alt="opt3 Image"></div>
                <div id="opt4"><img src=${obj.opt4Img} alt="opt4 Image"></div>
            `;
            }
            else {
                opt.innerHTML = `
                <div id="opt1">${obj.opt1}</div>
                <div id="opt2">${obj.opt2}</div>
                <div id="opt3">${obj.opt3}</div>
                <div id="opt4">${obj.opt4}</div>
            `;
            }
        }
        else {
            opt.innerHTML = "";
        }

        //to display submitted input
        if (obj.quesType == 'SCQ' || obj.quesType == 'MCQ') {
            if(S.submittedAns)
                document.querySelector("#userInput").innerText = `Your Answer : ${S.submittedAns}`;
            else
            document.querySelector("#userInput").innerText = `Your Answer : -`;

        }
        else {
            if(S.submittedInput)
                document.querySelector("#userInput").innerText = `Your Answer : ${S.submittedInput}`;
            else
                document.querySelector("#userInput").innerText = `Your Answer : -`;
        }

        //to display correct input
        if (obj.quesType == 'SCQ' || obj.quesType == 'MCQ') {
            document.querySelector("#correctInput").innerText = `Correct Answer : ${obj.ans}`;
        }
        else {
            document.querySelector("#correctInput").innerText = `Correct Answer : ${obj.input}`;
        }
    }

        // You can later change these values dynamically if needed

    const ctx = document.getElementById('resultPieChart').getContext('2d');

    const resultPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Correct', 'Incorrect', 'Unattempted'],
        datasets: [{
        data: [correct.length, incorrect.length, unatm.length],
        backgroundColor: ['#28a745', '#dc3545', '#6c757d'], 
        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Exam Result'
        }
        }
    }
    });

    //storing score in history to display on leaderboard
    await axios.patch(`/${user_id}/history`,{Score:score,card_id:hostid});
};
