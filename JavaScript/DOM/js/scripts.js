// 1 - movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

// 2 - selecionando elementos - getElementsByTagName
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 3 - selecionando elementos - getElementByID
const title = document.getElementById("title")
console.log(title);

// 4 - selecionando elementos - getElementByClassName
const product = document.getElementsByClassName("product")
console.log(product);

// 5 - encontrando elementos por query selector
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p")

const header = title.parentElement
console.log(header)

header.insertBefore(p,title)

// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")
navLinks.appendChild(li)

// 8 - replaceChild
const h2 = document.createElement("h2")
h2.textContent = "Meu novo Titulo"

header.replaceChild(h2, title)

// 9 - createTextNode 
const myText = document.createTextNode("Agora vamos colocar mais um titulo")
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a")
console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")
console.log(firstLink.getAttribute("href"))

// 11 - mudando estilo 
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#1a1a1a"

