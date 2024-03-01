// 1 - Los parametros pueden ser opcionales
// 2 - Pueden tener un valor por defecto
// 3 - Si no tienen un valor defecto cuando no es recibido, javascript me agrega un undefined

// function saludar(nombre) {
// }

// ----------------------------------------------------------

// function mensaje() {
//     console.log("Hola soy un mensaje")
// }

// function saludarEnIngles() {
//     console.log("Gus asternon, jawar yu all?")
// }

// function holaTomas() {
//     console.log("Hola Tomas")
// }

// function ejecutarCallbackSimple(callback) {
//     console.log("Vamos a ejecutar un callback")
//     callback()
// }

// ejecutarCallbackSimple(mensaje)
// ejecutarCallbackSimple(saludarEnIngles)
// ejecutarCallbackSimple(holaTomas)

// ---------------------------------------------------------------

// const conNombre = confirm("Saludas con nombre?")
// let nombre = undefined

// if (conNombre === true) {
//     nombre = prompt("Cual es el nombre de la persona?")
// }

// function saludarEspañol(nombre = "Richard") {
//     console.log("Hola, como estas?", nombre)
// }
// function saludarPortugues(nome = "Cara") {
//     console.log("Oi, tudo legal?", nome)
// }
// function saludarFrances(name = "") {
//     console.log("Bonjour!", name)
// }
// function saludarIngles(name = "JD") {
//     console.log("How are you?", name)
// }

// const callbackParaEvitarErrores = function () { }

// function saludar(callbackSaludar = callbackParaEvitarErrores, name) {
//     if (typeof callbackSaludar === 'function') callbackSaludar(name)
// }

// saludar(saludarEspañol, nombre)
// saludar(saludarIngles, nombre)

// ---------------------------------------------------------------------

// function suma(a, b) {
//     return a + b
// }

// function resta(a, b) {
//     return a - b
// }

// function producto(a, b) {
//     return a * b
// }

// function cociente(a, b) {
//     return a / b
// }

// function calculadora(a, b, operacion) {
//     const resultado = operacion(a, b)
//     console.log(resultado)
// }

// calculadora(5, 5, suma)
// calculadora(10, 5, resta)
// calculadora(5, 5, producto)
// calculadora(100, 2, cociente)
