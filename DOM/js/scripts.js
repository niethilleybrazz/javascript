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

// 6 - 