// const numeroIngresado1 = parseInt(prompt('Ingrese numero 1'))
// const numeroIngresado2 = +prompt('Ingrese numero 2')

// function suma(numero1, numero2) {
//     const suma = numero1 + numero2
//     return suma
// }

// CUANDO SE CREA LA FUNCION SE DECLARAN PARAMETROS
// function cuadrado(lado) {
//     return lado ** 2
// }

// function cubo(lado) {
//     return lado ** 3
// }

// CUANDO SE EJECUTA LA FUNCION SE PASAN ARGUMENTOS
// console.log(suma(numeroIngresado1, numeroIngresado2))
// console.log(cuadrado(numeroIngresado1))
// console.log(cubo(numeroIngresado2))
// console.log(cubo(numeroIngresado1))


function sumarNumerosArreglo(arreglo) {
    const cantidad = arreglo.length
    let suma = 0

    for (let i = 0; i < cantidad; i++) {
        suma += arreglo[i]
    }

    console.log(suma)
}

sumarNumerosArreglo([1, 2, 4, 7])
sumarNumerosArreglo([2, 2, 2, 2])
sumarNumerosArreglo([1, 10, 100, 1000])
sumarNumerosArreglo([1, 10, 100, -100, -1])
sumarNumerosArreglo([1, 10, 100, -100, -1])
sumarNumerosArreglo([1, 10, 100, -100, -1])
sumarNumerosArreglo([1, 10, 100, -100, -1])
sumarNumerosArreglo([1, 10, 100, -100, -1])
sumarNumerosArreglo([1, 10, 100, -100, -1])
sumarNumerosArreglo([1, 10, 100, -100, -1])

// let arr1 = [1, 2, 4, 7]

// const cantidad1 = arr1.length
// let suma1 = 0

// for (let i = 0; i < cantidad1; i++) {
//     suma1 += arr1[i]
// }

// console.log(suma1)

// let arr2 = [2, 2, 2, 2]

// const cantidad2 = arr2.length
// let suma2 = 0

// for (let i = 0; i < cantidad2; i++) {
//     suma2 += arr2[i]
// }

// console.log(suma2)

// let arr3 = [1, 10, 100, 1000]

// const cantidad3 = arr3.length
// let suma3 = 0

// for (let i = 0; i < cantidad3; i++) {
//     suma3 += arr3[i]
// }

// console.log(suma3)