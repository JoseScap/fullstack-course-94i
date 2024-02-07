// 6. Imprimir todos los elementos de una lista de nombres.

const nombres = [
    "Manuel",
    "Matias",
    "Ezequiel",
    "Alvaro",
    "Carolina",
    "Tomas",
    "Diego",
    "Lucas",
    "Nacho",
    "Lucas Canceco"
]

for (let i = 0; i < nombres.length; i++) {
    document.write(`<h3 class="text-warning">Hola ${nombres[i]}</h3>`)
}