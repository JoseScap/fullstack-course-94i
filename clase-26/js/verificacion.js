// Verificar si un número es positivo, negativo o cero: Solicita un número al usuario y
// muestra un mensaje indicando si es positivo, negativo o cero.

const numero1 = prompt("Ingrese el primer numero")
const numero2 = prompt("Ingrese el segundo numero")
const numero3 = prompt("Ingrese el tercer numero")
const numero4 = prompt("Ingrese el cuarto numero")
const numero5 = prompt("Ingrese el quinto numero")

function esPositivoNegativoONulo(numero) {
    if (numero > 0) {
        return `El ${numero} es positivo`
    } else if (numero < 0) {
        return `El ${numero} es negativo`
    }

    return `El ${numero} es nulo`
}

document.write(`<p>${esPositivoNegativoONulo(numero1)}</p>`)

document.write(`<p>${esPositivoNegativoONulo(numero2)}</p>`)

document.write(`<p>${esPositivoNegativoONulo(numero3)}</p>`)

document.write(`<p>${esPositivoNegativoONulo(numero4)}</p>`)

document.write(`<p>${esPositivoNegativoONulo(numero5)}</p>`)