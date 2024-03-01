// function funcAvanzar(metros = 100) {
//     console.log("El auto avanza", metros, "metros")
// }

// function funcArrancar() {
//     console.log("El auto hace brum brum")
// }

// let auto1 = {
//     arrancar: funcArrancar,
//     anio    : 2022,
//     marca   : "Fiat",
//     avanzar : funcAvanzar,
//     butacas: {
//         superficie: "Tapizado comun"
//     }
// }
// let auto2 = {
//     arrancar: funcArrancar,
//     anio    : 2022,
//     marca   : "VW",
//     avanzar : funcAvanzar,
//     butacas: {
//         superficie: "Tapizado comun"
//     }
// }
// let auto3 = {
//     arrancar: funcArrancar,
//     anio    : 2022,
//     marca   : "Renault",
//     avanzar : funcAvanzar,
//     butacas: {
//         superficie: "Tapizado comun"
//     }
// }

// let autos = [auto1, auto2, auto3]

// let products = [
//     { id: 1, name: "Leche", price: 1200, categories: [ "familiar", "comida" ],objetoInterno: { a: 1, b: 2 } },
//     { id: 2, name: "Arroz", price: 1500, categories: [ "familiar", "comida" ],objetoInterno: { a: 1, b: 2 } },
//     { id: 3, name: "Lavarropas", price: 500_000, categories: [ "electrodomesticos", "limpieza" ],objetoInterno: { a: 1, b: 2 } },
// ]

// for (let i = 0; i < products.length; i++) {
//     let product = products[i]
//     // Loggin en grupos
//     console.group(product.name)
//     console.log("Codigo", product.id)
//     console.log("Precio", product.price)
//     console.log("Categorias", product.categories.join(" - "))
//     console.groupEnd()

//     // Login en tabla
//     // console.table(product)
// }

let autoLiteral = {
    arrancar: function funcAvanzar(metros = 100) {
        console.log("El auto avanza", metros, "metros")
    },
    anio    : 2022,
    marca   : "Fiat",
    butacas: {
        superficie: "Tapizado comun"
    }
}

function Auto(anio, marca, superficie) {
    this.anio = anio
    this.marca = marca
    this.butacas = {
        superficie: superficie
    }
    this.avanzar = function funcAvanzar(metros = 100) {
        console.log("El auto avanza", metros, "metros")
    }
}

const auto1 = new Auto(2022, "VW", "Cuero")
const auto2 = new Auto(2022, "Renault", "Cuero")
const auto3 = new Auto(2022, "Fiat", "Cuero")