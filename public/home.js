let body=document.querySelector("body");
let i=document.querySelector("i");

let button = document.getElementById("theme-toggle");
let icon = document.getElementById("theme-icon");

//.....why used this?
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".sidebar").classList.add("show");
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".navbar").classList.add("show2");
});
//.....

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
    }
});

document.querySelector("#edit").addEventListener("click",()=>{
    document.querySelector("#profile").classList.toggle("profile");
    document.querySelector("#main").classList.toggle("bg");
});
document.querySelector("#cross").addEventListener("click",()=>{
    document.querySelector("#profile").classList.toggle("profile");
    document.querySelector("#main").classList.toggle("bg");
});

