// Metodos de strings

// 1 Cantidad de caracteres
const texto1 = "Hola, mundo!";
console.log(texto1, "tiene", texto1.length); // Imprime 12

for (let i = 0; i < texto1.length; i++) {
    console.log(texto1[i])
}

// 2 chatAt(index)
const texto2 = "JavaScript";
console.log(texto2.charAt(2)); // Imprime 'v'

for (let i = 0; i < texto2.length; i++) {
    console.log(texto2.charAt(i))
}

// Replace y replaceAll
const texto3 = "Hola, mundo!";
console.log(texto3.replace("mundo", "GPT-3")); // Imprime 'Hola, GPT-3!'
console.log(texto3.replaceAll("mundo", "GPT-3")); // Imprime 'Hola, GPT-3!'