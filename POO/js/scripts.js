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

// 10 - symbol (propriedade unica e imutavel)
class Aviao {
    constructor(marca, turbina) {
        this.marca = marca
        this.turbina = turbina
    }
}
const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10);

console.log(boeing)

console.log(boeing[asas])
console.log(boeing[pilotos])

// 11 - Getter e Setter (get = exibe o valor de um propriedade, set = altera o valor)
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Voce esta lendo: ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(" | ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Alguns post", "E um post sobre programacao");
console.log(myPost)
console.log(myPost.exibirTitulo)
myPost.adicionarTags = "programacao, javascript, js"

console.log(myPost)

// 12 - heranca
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark)