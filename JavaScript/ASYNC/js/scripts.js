// 1 - setTimeOut

console.log("Ainda nao executou");

setTimeout(function name(params) {
    console.log("Requisicao assincrona");
}, 2000)

console.log("Ainda nao executou paizao");

// 2 - setInterval 

// console.log("Ainda nao executou");
// setInterval(function name(params) {
//     console.log("Executando")
// }, 500)

// 3 - promises
const promessa = Promise.resolve(5 + 5)

console.log("Algum codigo ");

promessa.then((value) => {
    console.log(`A soma e ${value}`);
    return value
})
.then((value) => value - 1 )
.then((value) => console.log(`Agora e ${value}`))

console.log("outro codigo")

// 4 - falha na promise
Promise.resolve(4 *"asd")
.then((n) => {
    if (Number.isNaN(n)) {
        throw new Error("Valores invalidos");
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`));


