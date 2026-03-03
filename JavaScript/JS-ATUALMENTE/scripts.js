// 1 - Filter
const arr = [1,2,3,4,5,6]

const highNumbers = arr.filter((n) => {
    if (n>=3) {
        return n
    }
})
console.log(highNumbers)


const users = [
    {nome:"Matheus", available:true},
    {nome:"Gustavo", available:false},
    {nome:"Lula", available:true},
    {nome:"Bolsonaro", available:false},
    {nome:"Xandao", available:true},
]

const availableUsers = users.filter((users)=> users.available)
console.log(availableUsers);

// 2 - Map
const products = [
    {nome:"Camisa", price: 10.99, category:"Roupas"},
    {nome:"Tenis", price: 8.99, category:"Sapatos"},
    {nome:"Geladeira", price: 100.99, category:"Eletrodomesticos"},
    {nome:"TV", price: 80.99, category:"Eletronicos"},
    {nome:"VideoGame", price: 60.99, category:"Eletronicos"}
]

products.map((product) => {
    if (product.category === "Eletronicos") {
        product.onSale = true 
    }
})

console.log(products)

// 3 - template literals : inserção de variáveis

// 4 - destruturing 
const fruits = ["Maça", "Banana", "Morango"]

const [f1,f2,f3] = fruits
console.log(f1, f3);

const productDetails = {
    nome: "Mouse",
    price: 39.80,
    category: "Periferico"
}

const {nome,price,category} = productDetails
console.log(nome);
console.log(price);

// 5 - spread operator 
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]
console.log(a3)

const a4 = [0,...a1,...a3]
console.log(a4);

// 6 - classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)
console.log(shirt);

console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

// 7 - heranca 
class ProductWithAtribute extends Product{
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores sao:");
        this.colors.forEach((color) => {
            console.log(color);
        });
    } 
}


const hat = new ProductWithAtribute("Chapeu", 39.99, ["Preto", "Amerelo", "Verde"])
console.log(hat)
console.log(hat.name)
console.log(hat.colors);
hat.showColors()

