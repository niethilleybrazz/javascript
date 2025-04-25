// 1 - criando uma function
function minhaFuncao() {
    console.log("Testando")
}
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Minha funcao em variavel")
}
minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo :  ${txt}`)
}
funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("Outra funcao");

const nomePro = 'Joao'
function nomesCons() {
    console.log(`Ola ${nomePro}`)
}
nomesCons();

// 2 - return
const a = 10
const b = 20 
const c = 30
const d = 40

function somaValores(n1 , n2) {
    return n1 + n2;
}

const resultado = somaValores(a, b)

console.log(resultado)

// 3 - escopo da function 
let y = 10 

function testandoEscopo() {
    let y = 20 
    console.log(`Y dentro da function é ${y}`)
}
testandoEscopo();
console.log(`Y fora da function é ${y}`)

// 4 - escopo aninhado 
let m = 10 

function escopoAninhado() {
    let m = 20 
    if(true) {
        let m = 30
        if(true){
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
escopoAninhado()

console.log(m)