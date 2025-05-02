// 1 - Arrays
const lista = ["Matheus", 8, 4.7, true]
console.log(lista)

// 2 - Mais sobre arrays (os elemntos sao 0 bases, oque significa que comeca a ccontar do 0 )
const arr = ["a", "b", "c", "d"]
console.log(arr[0])
console.log(arr[2])

// 3 - Propriedades
const numbers = [1, 4, 6]
console.log(numbers.length)

const myName = "Niethilley"
console.log(myName.length)

// 4 - Metodos 
const otherNumbers = [8, 10, 12]
const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "Algum texto"
console.log(text)
console.log(text.toUpperCase()) // Caixa alta
console.log(text.toLowerCase()) // Caixa baixa
console.log(typeof text.toUpperCase) // toUpperCase é definido como function, mas o nome tecnico é metodo
console.log(text.indexOf("g")) // Indice

