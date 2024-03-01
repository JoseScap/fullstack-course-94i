const saludo = "HolA! cOMO eSTas? Me LlaMo [NOMBRE]"
const TCEI = "                     hola, como estas? Me llamo [NOMBRE]. Vivo en San Miguel de Tucuman                                                                     "

// console.log("Texto --->", saludo)

// console.log("Largo del texto --->", saludo.length)

// console.log("Caracter --->", saludo.charAt(21))

// console.log("Saludo partido a la mitad --->", saludo.substring(0, saludo.length / 2))

// console.log("Saludo en mayusculas --->", saludo.toUpperCase())

// console.log("Saludo en minusculas --->", saludo.toLowerCase())

// console.log("La palabra arranca en el caracter --->", saludo.toLowerCase().indexOf('llamo') )

// console.log("La palabra arranca en el caracter --->", saludo.toLowerCase().indexOf('llamo') )

// console.log("Nombre por Juan --->", saludo.replace('[NOMBRE]', 'Juan').toUpperCase() )
// console.log("Nombre por Esteban --->", saludo.replace('[NOMBRE]', 'Esteban').toLowerCase() )

// console.log("*", TCEI, "*")
// console.log("*", TCEI.trimStart(), "*")
// console.log("*", TCEI.trimEnd(), "*")
// console.log("*", TCEI.trim(), "*")

// console.log("Hola. ".concat("Como estas?"))

const saludoSpliteado = saludo.split("")
const letrasInvertidas = saludoSpliteado.reverse()
const saludoInvertido = letrasInvertidas.join("")

console.log(saludo)
console.log(saludoInvertido)