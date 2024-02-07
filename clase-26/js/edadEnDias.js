// Cálculo de edad en días: Solicita la edad del usuario y muestra la edad en días. (Nota:
// Suponiendo que todos los años son de 365 días)

const edad1 = prompt("Ingrese una edad")
const edad2 = prompt("Ingrese una edad")
const edad3 = prompt("Ingrese una edad")

function edadEnDias(edad) {
    const dias = edad * 365

    return dias
}

document.write("<p>" + edadEnDias(1) + "</p>")
document.write("<p>" + edadEnDias(edad1) + "</p>")
document.write("<p>" + edadEnDias(edad2) + "</p>")
document.write("<p>" + edadEnDias(edad3) + "</p>")