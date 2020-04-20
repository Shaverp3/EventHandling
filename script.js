// const darkModeButton=document.querySelector("#darkModeButton");

// darkModeButton.addEventListener("click",
// function(){
//     formElement=document.querySelector("form")
//     formElement.classList.toggle("dark-mode")
// })

// const jordanModeButton=document.querySelector("#jordanModeButton");

// jordanModeButton.addEventListener("click",
// function(){
//     const formElement = document.querySelector("form");
//     formElement.classList.toggle ("jordan-mode")
// })
const articleValue = document.querySelector("#message");


articleValue.addEventListener("keyup", function(){
    articleInput= articleValue.value;
    document.querySelector("#article1").textContent = articleInput;
    document.querySelector("#article2").textContent = articleInput;
})