// Simulamos un registro secuencial
let contador = 50_000_000

class Persona {
    constructor (nombre, sexo, peso, altura, anioDeNacimiento) {
        this.nombre = nombre
        this.dni = 0
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.anioDeNacimiento = anioDeNacimiento
    }

    mostrarGeneracion() {
        console.log(this.nombre, 'nacio en el año', this.anioDeNacimiento)
        if (this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948) {
            console.log('Pertenece a la generación Silent Generation y su principal caracteristica fue la austeridad.')
        } else if (this.anioDeNacimiento > 1948 && this.anioDeNacimiento <= 1968) {
            console.log('Pertenece a la generación Baby Boom y su principal caracteristica fue la ambición.')
        } else if (this.anioDeNacimiento > 1968 && this.anioDeNacimiento <= 1980) {
            console.log('Pertenece a la generación Generación X y su principal caracteristica fue la obsesión por el éxito.')
        } else if (this.anioDeNacimiento > 1980 && this.anioDeNacimiento <= 1993) {
            console.log('Pertenece a la generación Generación Y (millenials) y su principal caracteristica es la frustración.')
        } else if (this.anioDeNacimiento > 1993 && this.anioDeNacimiento <= 2010) {
            console.log('Pertenece a la generación Generación Z y su principal caracteristica es la irreverencía.')
        } else {
            console.log('No pertenece a ninguna generación conocida, vuelve a tu epoca.')
        }
    }

    esMayorDeEdad() {
        const edad = new Date().getFullYear() - this.anioDeNacimiento
        console.log(this.nombre, 'tiene', edad)
        if (edad >= 18) {
            console.log('Es mayor de edad')
        } else {
            console.log('No es mayor de edad')
        }
    }

    mostrarDatos() {
        return this
    }

    generarDni() {
        // Si no tiene DNI generado se procede a realizarlo
        if (this.dni === 0) {
            this.dni = contador
            contador++
        }
    }
}

const jose = new Persona('Juan José', 'M', 94.7, 172, 1997)
console.group('Jose')
jose.generarDni()
console.log(jose.mostrarDatos())
// jose.mostrarGeneracion()
// jose.esMayorDeEdad()
console.groupEnd()

const esteban = new Persona('Esteban David', 'M', 65, 162, 1991)
console.group('Esteban')
esteban.generarDni()
console.log(esteban.mostrarDatos())
// esteban.mostrarGeneracion()
// esteban.esMayorDeEdad()
console.groupEnd()

const juancito = new Persona('Juan Perez', 'M', 65, 162, 2009)
console.group('Juancito')
juancito.generarDni()
console.log(juancito.mostrarDatos())
// juancito.mostrarGeneracion()
// juancito.esMayorDeEdad()
console.groupEnd()
