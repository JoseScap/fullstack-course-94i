// 01 - Objeto anonimo
const pokemonAnonimo = {
    nombre: 'Pikachu',
    tipo: 'Elerctrico',
    atacar: function() {
        alert(`${this.nombre} ataca`)
    }
}

// 02 - Funcion constructora -> Clase
function PokemonFN(nombre, tipo) {
    this.nombre = nombre
    this.tipo = tipo
    this.atacar = function() {
        alert(`${this.nombre} ataca`)
    }
}

const charmander = new PokemonFN('Charmander', 'Fuego')
const bulbasaur = new PokemonFN('Bulbasaur', 'Planta')

// 03 - Clases
class PokemonCL {
    // La funcion que crea el objeto
    constructor(nombre, tipo) {
        // Estas son las propiedades
        this.nombre = nombre
        this.tipo = tipo
    }

    // Aqui abajo van los metodos
    atacar() {
        alert(`${this.nombre} ataca`)
    }
}

const squirtle = new PokemonCL('Squirtle', 'Agua')
const pikachu = new PokemonCL('Pikachu', 'Electrico ')