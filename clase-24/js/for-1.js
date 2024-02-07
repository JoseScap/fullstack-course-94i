// for ( variable de inicio ; el tope de la variable ; iteracion ) {
// }

// for (let i = 0; i < 10; i++) {
//     document.write("<p class='text-info'>" + i + "</p>")
// }

contador = 0

// genera i = 1 ; 1 < 20 ? TRUE ; i => 1 + 2
//   Ya N/A     ; 3 < 20 ? TRUE ; i => 3 + 2
//   Ya N/A     ; 5 < 20 ? TRUE ; i => 5 + 2
//                     ...
//   Ya N/A     ; 17 < 20 ? TRUE; i => 17 + 2
//   Ya N/A     ; 19 < 20 ? TRUE; i => 19 + 2
//   Ya N/A     ; 21 < 20 ? FALS => Salimos de nuestro bucle 
for (let i = 1; i < 20; i += 2) {
    // Imprimo 1
    // Imprimo 3
    // Imprimo 5
    // Imprimo ...
    // Imprimo 17
    // Imprimo 19

    document.write("<p class='text-info'>" + i + "</p>")
}
