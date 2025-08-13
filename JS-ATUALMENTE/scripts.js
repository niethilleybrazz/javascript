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