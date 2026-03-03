const numero = Number(prompt('Digite um numero'))
const numeroTitulo = document.getElementById("number-title")

const listaUl = document.createElement('ul');
numeroTitulo.innerHTML= numero
const item1 = document.createElement('li')
item1.textContent = `${numero} é inteiro. :  ${Number.isInteger(numero)}`
const item2 = document.createElement('li')
item2.textContent = `${numero} arredondado para baixo : ${Math.floor(numero)}`
const item3 = document.createElement('li')
item3.textContent = `${numero} arrendondado para cima : ${Math.ceil(numero)}`
const item4 = document.createElement('li')
item4.textContent = `${numero} com duas casas deimais : ${numero.toFixed(2)}`

listaUl.appendChild(item1)
listaUl.appendChild(item2)
listaUl.appendChild(item3)
listaUl.appendChild(item4)
document.body.appendChild(listaUl);