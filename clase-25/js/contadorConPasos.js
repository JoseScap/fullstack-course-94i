// Contador ascendente con paso definido: Pedir al usuario un número inicial, un número
// final y un paso. Mostrar en pantalla todos los números desde el número inicial hasta el
// número final, con el paso indicado. (Nota: Un paso refiere a las unidades a adicionar
// entre cada iteracion, por ejemplo: Intervalo del 1 al 30 con paso 3 -> 1 -> 4 -> 7 -> 10 -
// > 13 -> ... -> 25 -> 28 -> fin)

let numeroInicial = parseInt(prompt("Ingrese el numero inicial"));
let numeroFinal = parseInt(prompt("Ingrese el numero final"));
let paso = parseInt(prompt("De cuanto en cuanto vas a contar?"));

if (isNaN(numeroInicial) || isNaN(numeroFinal) || isNaN(paso)) {
    document.write(
        `
            <div class="alert alert-danger" role="alert">
                Por favor, ingrese valores numéricos válidos para los tres campos
            </div>
        `
    );
} else if (paso <= 0) {
    document.write(
        `
            <div class="alert alert-danger" role="alert">
                Par favor ingrese solo pasos positivos: ${paso}
            </div>
        `
    );
} else if (numeroInicial > numeroFinal) {
    document.write(
        `
            <div class="alert alert-danger" role="alert">
                Tu numero inicial (${numeroInicial}) no debe ser mayor que el numero final (${numeroFinal})
            </div>
        `
    );
} else {

    for (let i = numeroInicial; i <= numeroFinal; i += paso) {
        document.write(`<p>${i}</p>`)
    }

}