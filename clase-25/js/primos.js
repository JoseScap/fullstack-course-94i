// Comprobación de número primo: Pide al usuario un número y determina si es un
// número primo o no

const numero = prompt("Ingrese un numero")

// se puede dividir por si mismo y por el uno


// 1 2 3 4 [5] 6 7 8 9 10
// x        x

// [1] [2 3 4 5 6 7 8 9] [10]
// 

let divisores = 0

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        divisores++
    }
}

if (divisores === 0) {
    document.write(`<p>${numero} es un numero primo</p>`)
} else {
    document.write(`<p>${numero} no es un numero primo</p>`)
}