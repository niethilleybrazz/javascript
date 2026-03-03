// 1 - Criação de de objetos via functions
function criaPessoas(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoas('Ana', 'Caxias', 18)
const pessoa2 = criaPessoas('Andre', 'Souza', 21)
console.log(pessoa1.nome, pessoa2.nome);

// 2 - Criacao de objeto 
const carro = {
    marca:'Honda',
    modelo:'Civic',
    anoDoModelo:1998,
    
    observacoes() {
        console.log(`O carro de marca ${this.marca}, qual o modelo é ${this.modelo} foi fabricado no ano de ${this.anoDoModelo}`);
    }
}

carro.observacoes()