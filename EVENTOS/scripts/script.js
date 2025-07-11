// 1 - adicionando eventos
const btn = document.querySelector("#my-button")
btn.addEventListener("click", function() {
    console.log("Aeeh paizao");
})

const secondButton = document.querySelector("#my-second-button")
secondButton.addEventListener("click", function () {
    console.log("Apagando usuário");
})

// 2 - argumento do evento 
const myTitle = document.querySelector("#my-title")
myTitle.addEventListener("click", (event)=>{
    console.log(event);
})