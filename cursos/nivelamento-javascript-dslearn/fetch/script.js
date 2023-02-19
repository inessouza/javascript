const cep = '01001000'

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json`)

fetchResult
    .then(response => {
        console.log("Sucesso no fetch", response)
        const json = response.json()
        json
            .then(result => {
                console.log("Sucesso no JSON", result)
            })
            .catch(error => {
                console.log("Erro no JSON")
            })
    })
    .catch(error => {
        console.log("Erro no fetch", error)
    })

console.log("A")
console.log("B")
