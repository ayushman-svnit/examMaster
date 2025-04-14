let btn=document.querySelector("#btn");
let input=document.querySelector("#password");
let i=document.querySelector("i");
let form=document.querySelector("form");

btn.addEventListener("click", () => {
    if (i.classList.contains("fa-eye")) {
        i.classList.replace("fa-eye", "fa-eye-slash");
        input.type = "password"; 
    } else {
        i.classList.replace("fa-eye-slash", "fa-eye");
        input.type = "text"; 
    }
});

form.addEventListener("submit",async function(event) {
    let str=input.value;
    let caps=0;
    let small=0;
    let num=0;
    let spechar=0
    if(str.length<8){
        event.preventDefault(); // Prevent form submission
    }
    for(let i=0;i<str.length;i++){
        if(str[i]>='A' && str[i]<='Z')caps++;
        else if(str[i]>='a' && str[i]<='z')small++;
        else if(str[i]>='0' && str[i]<='9')num++;
        else spechar++;
    }
    if(caps==0 || small==0 || num==0 || spechar==0){
        event.preventDefault(); // Prevent form submission
    }
    if(str.length<8){
        alert("Password should include atleast 8-10 characters");
    }
    else if(caps==0){
        alert("Password should include at least Uppercase letters (A-Z)");
    }
    else if(small==0){
        alert("Password should include at least Lowercase letters (a-z)");
    }
    else if(num==0){
        alert("Password should include at least Numbers (0-9)");
    }
    else if(spechar==0){
        alert("Password should include at least Special characters");
    }
});