console.log("Ejecutando mi archivo")

// const numero1 = prompt('Ingrese un numero', '0');
// const numero2 = prompt('Ingrese un numero', '0');
// const numero3 = prompt('Ingrese un numero', '0');
// const numero4 = prompt('Ingrese un numero', '0');
// const numero5 = prompt('Ingrese un numero', '0');

// const numeroMenor = Math.min(numero1, numero2, numero3, numero4, numero5)
// const numeroMayor = Math.max(numero1, numero2, numero3, numero4, numero5)

// document.write("<p>El menor es " + numeroMenor + "</p>")
// document.write("<p>El mayor es " + numeroMayor + "</p>")

let numero6 = prompt('Ingrese un numero con decimales', '0.00');

// numero6 = parseInt(numero6)
numero6 = parseFloat(numero6)

const validacion = isNaN(numero6)

if (validacion === true) {
    document.write("<p>Recarga nuevamente, pero ingresa un numero valido</p>")
} else {
    const redondeadoParaAbajo = Math.floor(numero6)
    const redondeado = Math.round(numero6)
    const redondeadoParaArriba = Math.ceil(numero6)

    document.write("<p>Floor: El " + numero6 + " redondeado queda " + redondeadoParaAbajo + "</p>")
    document.write("<p>Round: El " + numero6 + " redondeado queda " + redondeado + "</p>")
    document.write("<p>Ceil: El " + numero6 + " redondeado queda " + redondeadoParaArriba + "</p>")
}
