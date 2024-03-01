function basicasDeString() {
    // posiciones    0  1  2  3  4  5
    const numeros = [1, 2, 3, 4, 5, 6]
    
    // posiciones       0        1         2          3         4       5        6
    const palabras = ["Hola", "Messi", "Hola", "Argentina", "Hola", "Rolling", "RC"]
    
    numeros.length // Longitud del arreglo
    
    numeros.push() // Agrega un elemento al final
    numeros.pop() // Elimina el ultimo elemento
    
    numeros.unshift() // Agrega un elemento al inicio del arreglo
    numeros.shift() // Elimina el primer elemento
    
    palabras.indexOf("Hola") // Nos da la posicion de la palabra hola -> 0
    palabras.indexOf("chau") // -1
    
    palabras.lastIndexOf("Hola") // Nos da la posicion de la palabra hola -> 0
    palabras.lastIndexOf("chau") // -1
    
    numeros.slice(1, 4) // Recibo un sub arreglo con resultado para guardar en otra variable 
                        //pero no modifica al arreglo original
    numeros.splice(3, 2) // El primero indica la posicion donde arranca el corte, el segundo
                         //indica cuantos elementos va a cortar, incluyendo al elemento inicial
                         // Esta accion si modifica el arreglo inicial
    
    numeros.concat([27,35,48]) // Agrega todos los elementos del arreglo en el
                                // parametro al final de nuestro arreglo inicial
    
    palabras.join("-") // Juanta todos los valores como texto y les agrega un - de separacion
    palabras.join() // Juanta todos los valores como texto y les agrega una 'coma' de separacion
}


function comparacionRecorrerSimple () {
    const palabras = ["Hola", "como", "estas", "?", "Me", "llamo", "José", "."]
    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i]
        // -------------
        // .....
        console.log(palabra)
        // .....
        // -------------
    }
    
    palabras.forEach(function (palabra) {
        // -------------
        // .....
        console.log(palabra)
        // .....
        // -------------
    })
}

// comparacionRecorrerSimple()

function comparacionFuncionFind() {
    const palabras = ["Hola", "como", "estas", "?", "Me", "llamo", "José", "."]
    
    const valor = "?"
    let posicion = -1
    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i]
        if (valor === palabra) {
            posicion = i
        }
    }
    console.log(posicion)

    const posicion2 = palabras.findIndex( function (palabra) {
        if (valor === palabra) return true // Devolvemos un true si lo encontramos
        return false
    })
    console.log(posicion2)
}

// comparacionFuncionFind()

function comparacionMapeo(numeroDeLaTabla) {
    const factores = [0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10]

    const tablaCalculada = []
    for (let i = 0; i < factores.length; i++) {
        const factor = factores[i]
        const multiplicacion = factor * numeroDeLaTabla
        tablaCalculada.push(multiplicacion)
    }
    console.log(tablaCalculada)

    const tablaCalculada2 = factores.map(function (factor) {
        return factor * numeroDeLaTabla
    })
    console.log(tablaCalculada2)
}

// comparacionMapeo(5)

function comparacionFiltrado() {
    const numeros = [0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 27, 48, 8, 15, 0, -2, -41, 1]

    const numerosFiltrados = []
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i]
        if ((numero % 2) === 0) {
            numerosFiltrados.push(numero)
        }
    }
    console.log(numerosFiltrados)

    const numerosFiltrados2 = numeros.filter(function(numero) {
        if ((numero % 2) === 0) return true
        return false
    })
    console.log(numerosFiltrados2)
}

// comparacionFiltrado()