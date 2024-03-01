
class Auto {
    // Funcion que crea el objeto o instancia
    constructor(color, marca, modelo) {
        this.color = color
        this.marca = marca
        this.modelo = modelo
        this.encendido = false
    }

    encender() {
        this.encendido = true
    }

    apagar() {
        this.encendido = false
    }
}


const golTrend = new Auto('Negro', 'VolksWagen', 2020)