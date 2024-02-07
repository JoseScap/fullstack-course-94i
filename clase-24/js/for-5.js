// 5. Mostrar la tabla de multiplicar de un número entregado por el usuario hasta el 10.

const numeroTabla = +prompt("Ingrese el numero de la tabla")

for (let i = 0; i <= 10; i++) {
    const multiplicacion = numeroTabla * i

    // document.write("<h3 class='text-info'> " + numeroTabla + " x " + i + " = " + multiplicacion + "</h3>")
    document.write(`<h3 class="text-danger">${numeroTabla} x ${i} = ${multiplicacion}</h3>`)
}
