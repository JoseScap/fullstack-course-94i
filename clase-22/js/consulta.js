console.log("Ejercicios de consulta")

// Año bisiesto: Solicita un año al usuario y determina si es un año bisiesto o no.
// alert("Ejercicio 1 -  Año bisiesto")
// const anio = prompt('Ingrese un año', '2023')

// Si el anio es multiplo de 4 sera bisiesto
// const esMultiplo = anio % 4 === 0

// SI PASA X COSA ENTONCES SUCEDE TAL OTRA COSA
// ===
// SI (PASA X COSA) {
//     ENTONCES SUCEDE TAL OTRA COSA
// }
// if (esMultiplo === true) {
//     document.write("🌍 El año es bisiesto<br />")
// }

// SI PASA X COSA ENTONCES SUCEDE TAL OTRA COSA
// SINO OCURRE LO DE ARRIBA EJECUTO OTRA COSA DISTINTA
// SI (PASA X COSA) {
//     ENTONCES SUCEDE TAL OTRA COSA
// } SINO OCURRE LO DE ARRIBA {
//     EJECUTO OTRA COSA DISTINTA
// }
// if (esMultiplo === true) {
//     document.write("🌍 El año es bisiesto, tiene 366 dias<br /><br/>")
// } else {
//     document.write("🌍 El año es normal, tiene 365 dias<br /><br/>")
// }


// -------------------------------------------------
// Calculadora simple: Pide dos números y una operación matemática (+, -, *, /) al usuario y
// muestra el resultado de la operación.

alert("Ejercicio 2 - Calculadora")
const operacion = prompt('Ingrese el simbolo de una operacion', '+')
const numero1 = +prompt('Ingrese un numero')
const numero2 = +prompt('Ingrese un numero')

if (operacion === '+') {

    const suma = +numero1 + +numero2
    document.write("<p class='text-success'>Operacion ➕</p><br />")
    document.write("<p class='text-success'>" + suma + "</p><br />")

} else if (operacion === '-') {

    const resta = numero1 - numero2
    document.write("<p class='text-success'>Operacion ➖</p><br />")
    document.write("<p class='text-success'>" + resta + "</p><br />")

} else if (operacion === 'x') {

    const multiplicacion = numero1 * numero2
    document.write("<p class='text-success'>Operacion ✖</p><br />")
    document.write("<p class='text-success'>" + multiplicacion + "</p><br />")

} else if (operacion === '/') {

    const division = numero1 / numero2
    document.write("<p class='text-success'>Operacion ➗</p><br />")
    document.write("<p class='text-success'>" + division + "</p><br />")

} else {

    document.write("<p class='text-danger'>Operacion invalida ⁉</p>")

}

// switch (operacion) {
//     case '+':
//         const suma = numero1 + numero2
//         document.write("<p class='text-success'>Operacion ➕</p><br />")
//         document.write("<p class='text-success'>" + suma + "</p><br />")
//         break;

//     case '-':
//         const resta = numero1 - numero2
//         document.write("<p class='text-success'>Operacion ➖</p><br />")
//         document.write("<p class='text-success'>" + resta + "</p><br />")
//         break;

//     case 'x':
//         const multiplicacion = numero1 * numero2
//         document.write("<p class='text-success'>Operacion ✖</p><br />")
//         document.write("<p class='text-success'>" + multiplicacion + "</p><br />")
//         break;

//     case '/':
//         const division = numero1 / numero2
//         document.write("<p class='text-success'>Operacion ➗</p><br />")
//         document.write("<p class='text-success'>" + division + "</p><br />")
//         break;

//     default:
//         document.write("<p class='text-danger'>Operacion invalida ⁉</p>")
// }