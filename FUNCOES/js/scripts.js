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

// 2 - return (  instrução que finaliza a execução de uma função e especifica o valor que a função deve retornar para onde foi chamada )
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

// 5 - arrow function (função "resumida")
const testeArrow = () => {
    console.log("Esta é uma arrow function")
}
testeArrow()

const parOuImpar = (n) => {
    if (n % 2 === 0 ) {
        console.log("Par!")
    } else {
        console.log("Impar!")
    }
}
parOuImpar(6);
parOuImpar(3);

// 6 - mais de arrow function 
const raizQuadrada = (x) => {
    return x * x
}
console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x 
console.log(raizQuadrada2(6))

// 7 - argumentos opcionais
const multiplication = function(m, n){
    if(n === undefined){
        return m*2
    } else{
        return m * n
    }
}
console.log(multiplication(6))
console.log(multiplication(2, 5))

const greeting = (name) => {
    if (!name) {
        console.log("Olá!")
        return
    }
    console.log(`Olá ${name}!`)
}
greeting();
greeting("Matheus")

// 8 - default ( é incrementado no "greet =" depois do "=" ele vira um default)
const customGreeting = (name, greet = "Ola") => {
    return `${greet}, ${name}`
}
console.log(customGreeting("Matheus"))
console.log(customGreeting("Joao"))

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text)
    }
}
repeatText("Ola")
repeatText("Agora repete 5 vezes", 5)

// 9 - Closure 
function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }
    display()
}
someFunction()

// 10 - Mais sobre closure
const multiplicationClosure = (n) => {
    return(m) => {
        return m*n
    }
}

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)
console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))

// 11 - Recursao (Especie de loop, já que permite a função se autoinvocar continuamente)
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou!")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x,m)
    }
}
untilTen(100, 7)


function factorial(x) {
    if (x === 0) {
        return 1
    } else {
        return x*factorial(x - 1)
    }
}
const num = 6 
const result = factorial(num)
console.log(`O fatorial é ${result}`)
