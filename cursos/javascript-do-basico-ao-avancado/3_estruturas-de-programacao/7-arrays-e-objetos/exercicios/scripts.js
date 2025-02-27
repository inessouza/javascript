console.log("Exercício 1")
const arr = [1, 2, 3, 4, 5]

console.log(arr[0])
console.log(arr[2])
console.log(arr[3])

console.log("Exercício 2")

let arr2 = [1, 2]
let arr4 = [1, 2, 3, 4]

console.log(arr2.length)
console.log(arr4.length)

console.log("Exercício 3")

const names = ["Fabiana", "Taciane", "Giulia", "Inês", "Maria"]

if (names.includes("Inês")) {
    console.log("Você está na lista.")
}

console.log("Exercício 4")

let pessoa = {
    "nome": "Paola",
    "idade": 30,
    "profissao": "Programadora"
}

console.log(pessoa)
let testStr = JSON.stringify(pessoa)
console.log(testStr)

console.log(JSON.parse(testStr))


console.log("Exercício 5")

let fruits = ["Banana", "Kiwi", "Laranja", "Maçã", "Pêssego", "Uva"]
let cars = ["Corsa", "HB20", "HRV"]

function verifyElements(arr) {
    if (arr.length < 5) {
        console.log("Poucos Elementos")
    } else if (arr.length >= 5) {
        console.log("Muitos Elementos")
    }
}

verifyElements(fruits)
verifyElements(cars)
