// 1. **Ejercicio de comparación de números:** 🔄
//    Pide dos números al usuario y muestra el mayor de los dos.

const numero1 = prompt('Ingrese un numero')
const numero2 = prompt('Ingrese otro un numero')

if (numero1 > numero2) {
    document.write('<h3>El primer numero es mayor</h3>')
} else if (numero2 > numero1) {
    document.write('<h3>El segundo numero es mayor</h3>')
} else {
    document.write('<h3>Son iguales</h3>')
}