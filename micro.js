const button=document.querySelector(".menu-btn");
const action=document.querySelector(".main-menu");

button.addEventListener("click",()=>{
    return action.classList.toggle("show");
})

console.log("hello")

