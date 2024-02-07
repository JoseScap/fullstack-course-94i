const lado1 = +prompt("Ingrese un lado")
const lado2 = +prompt("Ingrese un lado")
const lado3 = +prompt("Ingrese un lado")

function tipoDeTriaguloSegunLados() {
    if (lado1 === lado2 && lado1 === lado3) {
        console.log("Equilatero")
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        console.log("Escaleno")
    } else {
        console.log("Isoceles")
    }
}

tipoDeTriaguloSegunLados(lado1, lado2, lado3)