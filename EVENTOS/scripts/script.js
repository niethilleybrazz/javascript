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

// 3 - eventos de tecla 
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
})

document.addEventListener("keydown", (e) => {
    console.log(`Presionou a tecla ${e.key}`);
})

// 4 - eventos de mouse 
const mouse = document.querySelector("#mouse")

mouse.addEventListener("mousedown", () => {
    console.log("Presionou!");
})

// 5 - movimento do mouse 
document.addEventListener("mousemove", (e) => {
    // console.log(`no eixo X ${e.x}`)
    // console.log(`no eixo Y ${e.y}`)
})

// 6 - evento de scroll 
window.addEventListener("scroll", (e)=>{
    // if (window.pageYOffset > 200) {
    //     console.log("Passamos de 200px");   
    // }
})

// 7 - eventos de foco/blur
const input = document.querySelector("#myInput")
input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
    input.style.backgroundColor = "#e4e4e4ff"
})

input.addEventListener("blur", (e) => {
    console.log("Saiu no input");
    input.style.backgroundColor = "#b6b6b6ff"
})

// 8 - evento de carregamento 
window.addEventListener("load", (e)=>{
    console.log("A pagina carregou");
})

// 9 - debounce : executando de tempo em tempo, controlando os eventos
const debonce = (f, delay) =>{

    let timeOut 

    return(...arguments)=>{
        if (timeOut) {
            clearTimeout(timeOut)
        }
        timeOut = setTimeout(()=>{
            f.apply(arguments)
        }, delay)
    }
}
window.addEventListener("mousemove", debonce(()=>{
    console.log("EXECUTANDO");
},400)
)