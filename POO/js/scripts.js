// 1 - metodo
const animal = {
    nome:"Bob",
    latir: function() {
        console.log("Au Au")
    }
}
console.log(animal.nome)

animal.latir()

// 2 - aprofundando em metodos

const pessoa = {
    nome:"Matheus",
    getNome: function () {
        return this.nome
    },

    setNome: function (novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Joaquim")

console.log(pessoa.getNome()) 

// 3 - prototypes
const text = "asd"

console.log(Object.getPrototypeOf(text))

const bool = true 

console.log(Object.getPrototypeOf(bool))

// 4 - classes basicas 
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemao"

console.log(pastorAlemao)
console.log(pastorAlemao.patas)
console.log(cachorro)