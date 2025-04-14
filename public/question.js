
let index=0;
let mode = document.getElementById("theme-toggle")
let icon = document.getElementById("theme-icon");

let form=document.querySelector("form");
let ques=document.querySelector(".ques");
let opt1 = document.querySelector('label[for="opt1"]');
let opt2 = document.querySelector('label[for="opt2"]');
let opt3 = document.querySelector('label[for="opt3"]');
let opt4 = document.querySelector('label[for="opt4"]');
let input1=document.querySelector("#opt1");
let input2=document.querySelector("#opt2");
let input3=document.querySelector("#opt3");
let input4=document.querySelector("#opt4");

let prev=document.querySelector("#prev");
let clear=document.querySelector("#clear");
let next=document.querySelector("#next");
let timer=document.querySelector("#timer");

let ans=document.querySelector(".ans");
let num=document.querySelector(".num");

let math=document.querySelector("#math");
let phy=document.querySelector("#phy");
let chem=document.querySelector("#chem");

let instruction=document.querySelector("#instruction");
let sec1="http://localhost:8000/sec-1.png";
let sec2="http://localhost:8000/sec-2.png";
let sec3="http://localhost:8000/sec-3.png";

let infobox=document.querySelector(".infobox");

const url = new URL(form.action);

mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
    }
});

let btns=document.querySelectorAll("input[type='radio']");
console.log(btns);
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        updateData(btn.id,index);
    });
});
document.querySelector("#num").addEventListener("keydown",(event)=>{
    if ((event.key < "0" || event.key > "9") && event.key!="." && event.key!="Backspace") {
        event.preventDefault();     
    }
});
document.querySelector("#num").addEventListener("input",(event)=>{
    updateData('X',index);
});

let questions=[];
let submissions=[];
let navdivs=[];
let mathsize=0;
let physize=0;
let chemsize=0;

document.addEventListener("DOMContentLoaded",async ()=>{
    await initialise();
    navdivs=document.querySelectorAll(".navdiv");
    console.log(navdivs);
    navdivs.forEach((div)=>{
        div.addEventListener("click",()=>{
            index=div.innerText-1;
            display(index);
        });
    });
    display(index);
    // Start the countdown
    startCountdown();
});

async function initialise(){
    const res=await axios.post(`/crud${url.pathname}`);
    questions=res.data.Ques;
    //submissions
    for(let i=0;i<questions.length;i++){
        if(questions[i].subject==="math")mathsize++;
        else if(questions[i].subject==="phy")physize++;
        else if(questions[i].subject==="chem")chemsize++;
        let obj={
            hostid: questions[i].hostid,
            paper: questions[i].paper,
            subject: questions[i].subject,
            user_id:document.querySelector("#infobox").innerText.trim(),
            submittedAns: "",
            submittedInput: ""
        }
        submissions.push(obj);
    }
    console.log(submissions);
    //create navdivs
    let j=1;
    for(let i=1;i<=mathsize;i++){
        let div=document.createElement("div");
        div.classList.add("navdiv");
        div.classList.add("unatm");
        div.innerText=j;
        j++;
        math.appendChild(div);
    }
    for(let i=1;i<=physize;i++){
        let div=document.createElement("div");
        div.classList.add("navdiv");
        div.classList.add("unatm");
        div.innerText=j;
        j++;
        phy.appendChild(div);
    }
    for(let i=1;i<=chemsize;i++){
        let div=document.createElement("div");
        div.classList.add("navdiv");
        div.classList.add("unatm");
        div.innerText=j;
        j++;
        chem.appendChild(div);
    }
}

function display(index) {
    //display questions number
    document.querySelector("#quesNum").innerText=index+1;
    let obj=questions[index];
    
    //to display instructions
    if(obj.quesType==="SCQ")
        instruction.innerHTML=`<img src="${sec1}" alt="Instructions">`
    else if(obj.quesType==='MCQ')
        instruction.innerHTML=`<img src="${sec2}" alt="Instructions">`
    else
        instruction.innerHTML=`<img src="${sec3}" alt="Instructions">`

    //first empty all options and ques
    ques.innerHTML="";
    opt1.innerHTML="";
    opt2.innerHTML="";
    opt3.innerHTML="";
    opt4.innerHTML="";
    //to dipslay ques
    if(obj.isImg==true){
        let img=document.createElement("img");
        img.src=obj.quesImg;
        img.alt="Question Image";
        ques.appendChild(img);
    }
    else {
        ques.textContent=obj.ques;
    }
    //to display options or input
    if(obj.isOptImg==true){
        let img1=document.createElement("img");
        img1.src=obj.opt1Img;
        img1.alt="opt1 Image";
        opt1.appendChild(img1);
        let img2=document.createElement("img");
        img2.src=obj.opt2Img;
        img2.alt="opt2 Image";
        opt2.appendChild(img2);
        let img3=document.createElement("img");
        img3.src=obj.opt3Img;
        img3.alt="opt3 Image";
        opt3.appendChild(img3);
        let img4=document.createElement("img");
        img4.src=obj.opt4Img;
        img4.alt="opt4 Image";
        opt4.appendChild(img4);
    }
    else{
        opt1.textContent=obj.opt1;
        opt2.textContent=obj.opt2;
        opt3.textContent=obj.opt3;
        opt4.textContent=obj.opt4;
    }
    if(obj.quesType==='SCQ'){
        ans.classList.remove("ansdisplay");
        num.classList.add("input");
        input1.type="radio";
        input2.type="radio";
        input3.type="radio";
        input4.type="radio";
    }
    else if(obj.quesType==='MCQ'){
        ans.classList.remove("ansdisplay");
        num.classList.add("input");
        input1.type="checkbox";
        input2.type="checkbox";
        input3.type="checkbox";
        input4.type="checkbox";
    }
    else{
        ans.classList.add("ansdisplay");
        num.classList.remove("input");
    }
    //after the ques and options are displayed
    //to keep the options checked what user has checked or given input when the ques is displayed, using 'submissions' array and the 'ques index'
    let sub=submissions[index];
    if(obj.quesType==='Num'){
        if(sub.submittedInput!=""){
            document.querySelector("#num").value=sub.submittedInput;
        }
        else{
            document.querySelector("#num").value="";
        }
    }
    else{
        let s=sub.submittedAns;
        if(s.indexOf('A')===-1)input1.checked=false;
        else input1.checked=true;
        if(s.indexOf('B')===-1)input2.checked=false;
        else input2.checked=true;
        if(s.indexOf('C')===-1)input3.checked=false;
        else input3.checked=true;
        if(s.indexOf('D')===-1)input4.checked=false;
        else input4.checked=true;
    }
};

//to retain the options selected
function updateData(opt,index) {
    let sub=submissions[index];
    let q=questions[index];
    if(q.quesType=="SCQ"){
        if(opt=="opt1")sub.submittedAns='A';
        else if(opt=="opt2")sub.submittedAns='B';
        else if(opt=="opt3")sub.submittedAns='C';
        else if(opt=="opt4")sub.submittedAns='D';
    }
    else if(q.quesType=="MCQ"){
        let s="";
        btns.forEach((btn)=>{
            if(btn.checked==true){
                if(btn.id=="opt1")s+='A';
                else if(btn.id=="opt2")s+='B';
                else if(btn.id=="opt3")s+='C';
                else if(btn.id=="opt4")s+='D';
            }
        });
        sub.submittedAns=s;
    }
    else{
        sub.submittedInput=document.querySelector("#num").value;
    }
    count_atm_unatm();
};

function count_atm_unatm(){
    let at=0;
    let unat=0;

    for(let i=0;i<submissions.length;i++){
        if(submissions[i].submittedAns!="" || submissions[i].submittedInput!=""){
            at++;
            navdivs[i].classList.add("atm");
            navdivs[i].classList.remove("unatm");
        }
        else{
            unat++;
            navdivs[i].classList.add("unatm");
            navdivs[i].classList.remove("atm");
        }
    }
    document.querySelector(".at").textContent=`${at}`;
    document.querySelector(".unat").textContent=`${unat}`;
}

//BUTTONS
prev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        display(index);
    }
});

next.addEventListener("click",()=>{
    if (index < (questions.length) -1) {
        index++;
        display(index);
    }
});

clear.addEventListener("click",()=>{
    input1.checked=false;
    input2.checked=false;
    input3.checked=false;
    input4.checked=false;
    document.querySelector("#num").value="";
    submissions[index].submittedAns="";
    submissions[index].submittedInput="";
    updateData('X', index);
});


//timer
let totalSeconds = 3 * 60 * 60; // 3 hours in seconds

function updateTimerDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    // Format to always show two digits (e.g., 02:05:09)
    let formattedTime = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');

    timer.textContent = formattedTime;
}

// Countdown function
function startCountdown() {
    let timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval); // Stop when reaches 0
            document.getElementById("timer").textContent = "00:00:00";
            alert("Time is up!");
            //submit request form using axios
        }
    }, 1000); // Run every 1 second
}

function getDate(){
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = today.getFullYear();
    
    const dateString = `${day}/${month}/${year}`;
    return dateString;
}

function getTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    return timeString;
}

document.querySelector("#submit").addEventListener("click",async (e)=>{
    await axios.post(`/submission/${questions[0].hostid}/${submissions[0].user_id}`,{response : submissions});
});

document.querySelector("#submit").addEventListener("click",async (e)=>{
    await axios.post(`/${submissions[0].user_id}/history`,{
        response : questions[0].hostid,
        date:getDate(),
        time: getTime()
    });
    await axios.post(`/submission/${questions[0].hostid}/${submissions[0].user_id}`,{response : submissions});
});

