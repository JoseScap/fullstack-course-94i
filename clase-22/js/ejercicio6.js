// 6. **Verificación de divisibilidad:** ➗
//    Solicita dos números y verifica si el primero es divisible por el segundo.

const dividendo = +prompt('Ingresa el dividendo')
const divisor = +prompt('Ingresa el divisor')

if (divisor === 0) {
    document.write('<h3>⁉ El divisor no puede ser nulo</h3>')
} else {
    const resultado = dividendo / divisor

    if (dividendo % divisor === 0) {
        document.write('<h3>✅ La division es exacta ' + resultado + '</h3>')
    } else {
        document.write('<h3>❌ La division no es exacta ' + resultado + '</h3>')
    }

}
