// nombres.push("Ezequiel") // Push para agregar algo al final del arreglo
// nombres.unshift("Matias") // Unshift para agregar algo al principio del arreglo

// nombres.pop() // Pop para eliminar algo al final del arreglo
// nombres.shift() // Shift para eliminar algo al principio del arreglo

// const cantidadNombres = 3

// const nombres = []

// for (let i = 0; i < cantidadNombres ; i++) {
//     const nombreIndividual = prompt("Ingrese un nombre")
//     nombres.push(nombreIndividual)
// }

// for (let index = 0; index < cantidadNombres ; index++) {
//     const element = nombres[index]
//     document.write(`<p>Escrito desde el for: ${element} - ${index}</p>`)
// }

// function escribirNombres(element, index) {
//     document.write(`<p>Escrito desde el callback: ${element} - ${index}</p>`)
// }

// nombres.forEach(escribirNombres)

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// const palabras = []
// let nuevaPalabra

// do {
    
//     nuevaPalabra = prompt("Ingrese una palabra")
//     if (nuevaPalabra !== null) palabras.push(nuevaPalabra)

// } while (nuevaPalabra !== null)

// document.write(`<p>Desde el for</p>`)

// for (let index = 0; index < palabras.length ; index++) {
//     const element = palabras[index]
//     document.write(`<p class="fw-bold text-danger">${element}</p>`)
// }

// document.write(`<p>Desde el forEach</p>`)

// function escribirPalabras(palabra) {
//     document.write(`<p class="fw-bold text-info">${palabra}</p>`)
// }

// palabras.forEach(escribirPalabras)

// const numeroDesdeElUsuario = 2
// const factores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let index = 0; index < factores.length ; index++) {
//     const factor = factores[index]
//     document.write(`
//         <p class="fw-bold text-danger">
//             ${factor} x ${numeroDesdeElUsuario} = ${factor * numeroDesdeElUsuario}
//         </p>
//     `)
// }

// function escribirProducto(factor) {
//     document.write(`
//         <p class="fw-bold text-info">
//             ${factor} x ${numeroDesdeElUsuario} = ${factor * numeroDesdeElUsuario}
//         </p>
//     `)
// }

// factores.forEach(escribirProducto)
// ----------------------------------
const numeros = [0, 1, 2, 7, 8, 9, 10]

let posicionDeLaBusqueda = -1
for (let index = 0; index < numeros.length ; index++) {
    const numero = numeros[index]
    if (
        numero === 7
    ) {
        posicionDeLaBusqueda = index
    }
}
console.log(posicionDeLaBusqueda)


const posicionDeLaBusqueda2 = numeros.findIndex(function buscarUnNumero(numero) {
    return numero === 7
})
console.log(posicionDeLaBusqueda2)