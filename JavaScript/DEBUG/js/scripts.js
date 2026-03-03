// 1 - strict 
"use strict"

const opa = "teste"

// 2 - console.log
let a = 1
let b = 2 

if (a == 1) {
    a = b+2
}

console.log(a);

for (let i = 0; i< b ; i++) {
    a = a + 2 
    console.log(a);
}

if (a>5) {
    a = 25
}
console.log(a);

// 3 - debugger
let c = 1 
let d = 2

if (c==1) {
    c = d + 2 
}

// debugger

for (let i = 0; i < d; i++) {
   c = c + 2 
}

// 4 -Tratamento de dados
function checkNumber(n) {
    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log("Erro")
    }
    console.log("Bem vindo")
    return result
}

checkNumber(7)

// 5 - Execptions
let x = 10 

// if (x != 11) {
//     throw new Error("Opa! Produto indisponivel");
// }

// 6 - try catch
    try {
        const soma = x + y
    } catch (error) {
        console.log(`Erro no programa ${error}`)
    }

// 7 - finally

    try {
        const value = checkNumber("asd")
        
        if (!value) {
            throw new Error("Valores invalidos");
        }
        
    }catch(error){
        console.log(`Opa! Deu erro ai : ${error}`);
    } finally {
        console.log("The code was executed");
        
    }

// 8 - assertions 
    
    function checkArray(arr) {
        if (arr.length === 0) {
            throw new Error("Uai, tem nada aqui");
        } else {
            console.log(`O array tem ${arr.length} elementos agora`);
        }
    }

    checkArray([1,2,3])
