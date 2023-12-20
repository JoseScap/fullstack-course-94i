let nombre = prompt('Ingrese un nombre:', "Jose")
let edad = prompt('Ingrese una edad:', "0")
let secundario = "NO"

document.write("<h1>Hola " + nombre + "</h1>")
document.write("<p>" + nombre + " tiene " + edad + "</p>")

if (edad > 18) {
    secundario = prompt('Finalizo la secundaria', "SI")
}

// -------------------------------------

if (edad < 12) {
    document.write("<p class='text-success'>" + nombre + ' cursa la escuela de nivel primario</p>')
} else if (edad >= 12 && edad <= 18) {
    document.write("<p class='text-success'>" + nombre + ' cursa la escuela de nivel secundario</p>')
} else if (edad > 18 && secundario == "SI") {
    document.write("<p class='text-success'>" + nombre + ' puede cursar estudios superiores</p>')
} else {
    document.write("<p class='text-success'>" + nombre + ' no puede cursar estudios superiores</p>')
}
