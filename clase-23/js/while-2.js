// 2. **Calculadora de potencias:** Crea un programa que pida al usuario un número
// base y un exponente. Utilizando un bucle `while`, calcula y muestra el resultado
// de elevar el número base al exponente indicado.

alert("Calculadora de potencias")
let base = +prompt("Ingrese la base")
let exponente = +prompt("Ingrese el exponente")

// Base:
//      A) base no puede ser 0
//      B) base no puede ser 0 si exponente es 0
// Exponente:
//      No puede ser negativo

// Cortamos la ejecucion y mostramos un mensaje
if (base === 0) {
    document.write("<p class='text-danger'>La base no puede ser 0</p>")

    // Cortamos la ejecucion y mostramos un mensaje
} else if (exponente < 0) {
    document.write("<p class='text-danger'>El exponente no puede ser negativo</p>")
} else {

    // Si el exponente es 0, cualquier base da resultado 1 y lo mostramos como mensaje
    if (exponente === 0) {
        document.write("<p class='text-success'>El resultado es 1</p>")

        // Si el exponente es 1, cualquier base es su mismo resultado y lo mostramos como mensaje
    } else {

        // Contara la veces que fuimos multiplicando
        let contador = 1;
        // El resultado es la base
        let resultado = base;

        // contador 1 > 3 exponente ? TRUE
        while (contador < exponente) {
            resultado = resultado * base;

            contador++;
        }

        document.write("<p class='text-success'>El resultado es " + resultado + "</p>")
    }
}