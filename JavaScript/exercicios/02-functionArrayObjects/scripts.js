const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const peso = document.getElementById('peso')
const altura = document.getElementById('altura')

let lista = []
const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(salvar){
    salvar.preventDefault();

    const pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    }

    lista.push(pessoa)
    console.log(lista)

    formulario.reset()
})