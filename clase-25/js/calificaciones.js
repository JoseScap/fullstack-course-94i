// Sistema de puntaje de examen: Pide al usuario su puntaje en un examen de 100
// puntos y muestra la calificación correspondiente (A, B, C, D o F). (Nota 1: los rangos
// siguen los valores de A [100, 90]; B [89, 80]; C[79, 70]; D[69, 60]; F[59, 0] | NOTA 2: Si la
// calificacion sale del rango [100, 0] se debe indicar un error)

const nota = prompt("Ingrese una calificacion")

if (nota > 100 || nota < 0) {
    document.write(
        `
            <div class="alert alert-danger" role="alert">
                El numero ingresado no es valido: ${nota}
            </div>
        `
    )
} else if (nota <= 100 && nota >= 90) {
    document.write(
        `
            <div class="alert alert-primary" role="alert">
                Excelente ${nota}
            </div>
        `
    )
} else if (nota <= 89 && nota >= 80) {
    document.write(
        `
            <div class="alert alert-success" role="alert">
                Muy Bueno ${nota}
            </div>
        `
    )
}
else if (nota <= 79 && nota >= 70) {
    document.write(
        `
            <div class="alert alert-info" role="alert">
                Bueno ${nota}
            </div>
        `
    )
}
else if (nota <= 69 && nota >= 60) {
    document.write(
        `
            <div class="alert alert-light" role="alert">
                Regular ${nota}
            </div>
        `
    )
} else {
    document.write(
        `
            <div class="alert alert-danger" role="alert">
                Debe repetir el examen ${nota}
            </div>
        `
    )
}
