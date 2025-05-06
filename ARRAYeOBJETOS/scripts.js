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

// 5 - Objetos 
const person = {
    name:"Matheus",
    age: 31,
    job:"Programador"
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.job)

// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}
console.log(car)

car.doors = 4
console.log(car)

delete car.km
console.log(car)

// 7 - mais sobre objetos
const obj = {
    a:"teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c:[]
}

Object.assign(obj2, obj)
console.log(obj2)

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))

console.log(Object.entries(obj))
console.log(Object.entries(obj2))

// 9 - mutacao 
const a = {
    name:"Niethilley"
}
const b = a 

console.log(a)
console.log(b)

console.log(a === b)

a.age = 18

console.log(b)

delete b.age

console.log(b)
console.log(a)

// 10 - loop em array
const user = ["Niethilley","Matheus","Joao","Ana"]

for(let i = 0; i < user.length; i++){
    console.log(`Listando o usuario: ${user[i]}`)
}

// 11 - push e pop
const array = ["a", "b", "c", "d"]

array.push("e")

console.log(array)

array.pop()

console.log(array)

// 12 - shift e unshift 
const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("d","e","f")
console.log(letters)

// 13 - indexof e lastindexof
const myElements = ["Morango", "Abacaxi", "Banana", "Laranja","Banana"]
console.log(myElements.indexOf("Morango"))
console.log(myElements.indexOf("Banana"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Banana")])