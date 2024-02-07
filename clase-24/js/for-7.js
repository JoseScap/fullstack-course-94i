// 7. Sumar todos los elementos de una lista de numeros.
// Si el resultado es par multiplicarlo por 100 sino divirlo en 5

const numeros = [25, 87, 48, 44, 97, 100, 581, 0, -15, -87, 0]

let suma = 0

document.write('<h2>Suma de un arreglo</h2>')
document.write(`<h4>Los numeros son ${numeros}</h4>`)

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
}

document.write(`<h4>La suma es ${suma}</h4>`)
document.write(`<hr />`)

if (suma % 2 === 0) {
    document.write(`<h4>La suma es par</h4>`)
    let multiplicacion = suma * 100
    document.write(`<h4>El resultado final es: ${multiplicacion}</h4>`)
} else {
    document.write(`<h4>La suma es impar</h4>`)
    let division = suma / 5
    document.write(`<h4>El resultado final es: ${division}</h4>`)
}
