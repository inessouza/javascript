function soma(num1, num2) {
    return num1 + num2
}

const soma2 = function (num1, num2) {
    return num1 + num2
}

// arrow function
const soma3 = (num1, num2) => {
    return num1 + num2
}

const soma4 = (num1, num2) => num1 + num2

const dobro1 = function(num) {
    return num * 2
}

const dobro2 = num => num * 2

// Função que não tem retorno definido, por padrão ela retorna undefined

function mostrarPreco(preco) {
    console.log("Preço = " + preco)
}

// Variáveis definidas dentro do escopo da função não vazam do escopo

function areaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio
}

// Function hoisting: funções no JS "movidas" para cima pelo motor do JS

function teste(x) {
    console.log("Teste = " + x);
}

// Funções podem ser passadas como argumento

function triplo(num) {
    return num * 3
}

function aplicar(f, num) {
    const result = f(num)
    console.log("Resultado = " + result)
}

aplicar (triplo, 10)
aplicar(dobro1, 10)
