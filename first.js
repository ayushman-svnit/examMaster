// let ques=["What is unit of power?","force(F)=?","Dimensions of force"];
// let ans=[["W","m/s","m/s^2","N"],["mv","ma","mg","m"],["[MLT^-2]","[M]","[LT^-2]","[LT^-2]"]];
// let i=0;
// let next=document.querySelector("#next");

// change theme
let c=0;
let div=document.getElementById("modeChange").addEventListener("click",function(){
    if(c==0) {
        let link=document.querySelector("link");
        link.href="style_dark.css";
        c=1;
    }
    else {
        let link=document.querySelector("link");
        link.href="style.css";
        c=0;
    }
});
