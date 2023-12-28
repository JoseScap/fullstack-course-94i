// 3. **Suma de números pares:** Desarrolla un programa que solicite al usuario un número
// entero positivo. Luego, usando un bucle `while`, suma todos los números pares desde 0
// hasta el número ingresado por el usuario, y muestra el resultado final de la suma.

alert("Suma de números pares")

let final = +prompt("Ingrese un numero positivo")

let contador = 0;
let suma = 0;

while (contador <= final) {
    suma += contador
    console.log(suma)

    contador += 2
}

document.write("<p class='text-success'>El resultado es " + suma + "</p>")
