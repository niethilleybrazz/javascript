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

const Bulldog = Object.create(cachorro)
Bulldog.raca = "Bulldog"

console.log(Bulldog)

// 5 - funcao como classe - funcao construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.raca = raca
    cachorro.nome = nome

    return cachorro
}

const bob = criarCachorro("Bob", "Viralata")

console.log(bob)

const nero = criarCachorro("Nero", "Doberman")

console.log(nero)

// 6 - new 
function Cachorro(raca, nome){
    this.raca = raca
    this.nome = nome
}
const husky = new Cachorro("Husky", "Tody");

console.log(husky)

// 7- metodo funcao construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu")
}

husky.uivar()

// 8 - classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

// 9 - mais classes 
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao(){
        console.log(`Este caminhao tem ${this.eixos} e tem a cor ${this.cor}`)
    }
}

const Scania = new Caminhao(6, "Vermelho");
console.log(Scania)

Scania.descreverCaminhao()