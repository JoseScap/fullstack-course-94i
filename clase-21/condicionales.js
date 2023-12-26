console.log('Condicionales')

// let numero = prompt('Ingrese una calificacion de 0 a 100')

// numero = Math.ceil(numero)

// if (numero <= 10 && numero >= 9) {
//     document.write('<h3 class="bold text-info">Nota: ☑ Excelente ' + numero + '</h3>')
// } else if (numero < 9 && numero >= 8) {
//     document.write('<h3 class="bold text-success">Nota: ✅ Muy bueno ' + numero + '</h3>')
// } else if (numero < 8 && numero >= 7) {
//     document.write('<h3 class="bold text-success">Nota: 👍 bueno ' + numero + '</h3>')
// } else if (numero < 7 && numero >= 6) {
//     document.write('<h3 class="bold text-warning">Nota: 🤐 Regular ' + numero + '</h3>')
// } else if (numero < 6 && numero >= 0) {
//     document.write('<h3 class="bold text-danger">Nota: ❌ Re-hacer ' + numero + '</h3>')
// } else {
//     document.write('<h3 class="bold text-danger">Nota: Nota Invalida⁉ ' + numero + '</h3>')
// }

// let numero1 = prompt('Ingrese un numero valido')
// let numero2 = prompt('Ingrese un numero valido')
// let numero3 = prompt('Ingrese un numero valido')


// //         |   1   |   2   |   3   |
// //    1    |   =   |   >   |   >   |
// //    2    |   >   |   =   |   >   |
// //    3    |   >   |   >   |   =   |

// // si el numero1 es mayor al numero 2 y numero1 es mayor al numero3 es el mayor de todos
// if (numero1 >= numero2 && numero1 >= numero3) {
//     document.write('<h3 class="bold text-info">☑ El mayor es el primero ' + numero1 + '</h3>')
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//     document.write('<h3 class="bold text-info">💪 El mayor es el segundo ' + numero2 + '</h3>')
// } else {
//     document.write('<h3 class="bold text-info">🧉 El mayor es el tercero ' + numero3 + '</h3>')
// }

let numero1 = prompt('Ingrese un numero valido')
let numero2 = prompt('Ingrese un numero valido')
let numero3 = prompt('Ingrese un numero valido')

const numeroMayor = Math.max(numero1, numero2, numero3)

document.write('<h3 class="bold text-info">🧉 El mayor es el numero ' + numeroMayor + '</h3>')