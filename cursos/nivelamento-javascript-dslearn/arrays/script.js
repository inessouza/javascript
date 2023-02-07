// TAMANHO DO ARRAY

const valores = ["Maria", 37, false, 1.64]
const t1 = valores.length

console.log("Teste Length")
console.log(t1)

// REMOVER ELEMENTOS

const nomes = ["Maria", "Ana", "Marcos", "João"]
const r1 = nomes.pop() /* remove o elemento do final do array */
const r2 = nomes.shift() /* remove o primeiro elemento do array */

console.log(r1)
console.log(r2)
console.log(nomes)

// INSERIR ELEMENTOS:

const alturas = [1.65, 1.82, 1.70]
alturas.push(1.75) /* insere um elemento no final do array */
alturas.unshift(1.58) /* insere um elemento no começo do array */

console.log(alturas)

// INSERIR E REMOVER GERAL

const letras = ["A", "B", "C", "D", "E", "F"]

letras.splice(2, 3, "X", "Y") /* primeiro parâmetro define a partir de qual elemento será feita a remoção, segundo parâmetro define quantos elementos serão removidos, é possível também passar elementos para serem inseridos no lugar dos elementos removidos */

console.log(letras)

// CONCATENAR ARRAYS

const meninas = ["Maria", "Ana"]
const meninos = ["João", "Marcos"]

const todos = meninas.concat(meninos) /* método concat serve para concatenar arrays */
console.log(todos)

// ACESSO E ATRIBUIÇÃO

const idades = [20, 30, 40, 50]
idades[1] = 38; /* acessa a posição do array e atribui um valor a posição acessada */

console.log(idades)

// PERCORRER ARRAY

const frutas = ["Banana", "Laranja", "Pêssego"]

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

frutas.forEach(item => {
    console.log(item)
})

/* Para percorrer um array podemos usar tanto o for como o forEach
