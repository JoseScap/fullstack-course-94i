// 1. **Contador ascendente y descendente:** Escribe un programa que solicite al
// usuario un número inicial y un número final. Luego, utilizando un bucle `while`,
// muestra todos los números en orden ascendente desde el número inicial hasta el número final
// y luego en orden descendente desde el número final hasta el número inicial.

// contador arranca en 0
let contador = 0

// mientras contador sea menor o igual a 10 arrancamos
// 0 <= 10 ? TRUE
// 1 <= 10 ? TRUE
// 2 <= 10 ? TRUE
// ... <= 10 ? TRUE
// 9 <= 10 ? TRUE
// 10 <= 10 ? TRUE
// 11 <= 10 ? FALSE
while (contador <= 10) {
    // muestro el contador en pantalla
    document.write('<span> ' + contador + ' </span>')

    // ahora vale una unidad mas porque usamos el ++ => ejemplo si vale 5 pasa a 6; si vale 128 pasa a 129; si vale -1 pasa a 0
    contador++
}

// Nos vemos en disney
document.write('<p>Nos vemos en disney</p>')
