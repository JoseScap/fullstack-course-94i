// Patrón de asteriscos: Pedir al usuario un número y mostrar un patrón de asteriscos en
// forma de pirámide con altura igual al número ingresado utilizando un bucle for .

const cantidadDeArboles = +prompt("Cuantos arboles quiere mostrar en pantalla")

function armarUnArbol(numero) {
    for (let i = 1; i <= numero; i++) {
        const estrellitas = "*".repeat(i)

        document.write("<p>" + estrellitas + "</p>")
    }
}

for (let i = 1; i <= cantidadDeArboles; i++) {
    armarUnArbol(i)

    document.write("---------------------------")
}