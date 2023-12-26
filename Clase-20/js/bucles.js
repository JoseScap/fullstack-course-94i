// EJEMPLO 1 WHILE
// Estructura repetiva "MIENTRAS"
// let nombre = ""

// document.write("<h1>Saludos y agradecimientos para:</h1>")

// // mientras (nombre es distinto a fin) realizo lo que esta entre llaves
// while (nombre != "fin") {
//     nombre = prompt("Ingrese un nombre")
//     document.write("<h2>Hola " + nombre + "</h2>")
// }

// EJEMPLO 2 WHILE
// let number = 80

// // numero = 0
// document.write("<h2>While</h2>")

// // mientras el numero sea menor o igual a 50 ejecuto el bucle
// while (number <= 2) {
//     document.write("<span class='fs-3'>" + number + " </span>")

//     number += 2
// }

// document.write("<br />")

// document.write("<h2>For</h2>")
// for (let numberFor = 2; numberFor <= 50; numberFor += 2) {
//     document.write("<span class='fs-3'>" + numberFor + " </span>")
// }

// document.write("<br />")

// let numberDo = 2;
// document.write("<h2>Do While</h2>")
// // ejecuto el siguiente codigo
// do {
//     document.write("<span class='fs-3'>" + numberDo + " </span>")

//     numberDo += 2
//     // mientras el numero sea menor o igual a 50 vuelvo a ejecutar el bucle
// } while (numberDo <= 50);

// let finNumero = prompt('Numero de finalizacion')

// document.write("<br /><h2 class='text-success'>FIZZ BUZZ</h2>")

// if (finNumero < 0) document.write("<span class='fs-3 text-danger'>¡Ingresaste un numero negativo!</span>")

// for (let i = 0; i <= finNumero; i += 2) {
//     document.write("<br /><span class='fs-3'>" + i + "</span>")

//     if (i % 5 === 0) document.write("<span class='fs-3 text-info'>FIZZ</span>")

//     if (i % 7 === 0) document.write("<span class='fs-3 text-danger'>BUZZ</span>")
// }

// const frutas = ["banana", "manzana", "pera", "uva", "sandia"]

// // document.write("<br /><h2 class='text-success'>Frutas favoritas🍉🍌🍇</h2>")

// for (const frutaIndividual of frutas) {
//     document.write("<span class='fs-3 text-danger'>" + frutaIndividual + "</span><br />")
// }

// const fruta1 = prompt('Ingrese una de sus frutas favoritas')
// const fruta2 = prompt('Ingrese una de sus frutas favoritas')
// const fruta3 = prompt('Ingrese una de sus frutas favoritas')
// const fruta4 = prompt('Ingrese una de sus frutas favoritas')
// const fruta5 = prompt('Ingrese una de sus frutas favoritas')

// const frutas = [fruta1, fruta2, fruta3, fruta4, fruta5]

// document.write("<br /><h2 class='text-success'>Frutas favoritas🍉🍌🍇</h2>")

// for (const frutaIndividual of frutas) {
//     document.write("<span class='fs-3 text-danger'>" + frutaIndividual + "</span><br />")
// }