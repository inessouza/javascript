function dizerOla() {
    console.log("Ola")
}

//setTimeout(dizerOla, 2000)

function dizerBomDia(nome) {
    console.log("Bom dia " + nome)
}

setTimeout(() => {
    dizerBomDia("Maria")
    setTimeout(() => {
        dizerBomDia("João")
        setTimeout(() => {
            dizerBomDia("Ana")
        }, 5000)
    }, 4000)
}, 3000)

console.log("A")
console.log("B")
