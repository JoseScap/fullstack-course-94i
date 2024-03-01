/** ------------------------------- */
/** AQUI VAN TODAS LAS CONSTANTES */
const TARJETAS_FALSAS = `
<div class='d-flex gap-2'>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Producto</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/product" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Producto</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/product" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Producto</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/product" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
`

const TEXT_RELLENO = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ex. Assumenda quidem aliquam quae ex rem atque adipisci officia, excepturi illum pariatur quos itaque ipsum rerum optio eum libero inventore."

/** ---------------------------------- */
/** AQUI VAN TODAS MIS FUNCIONES */

function fechaComoTexto(conHora = false) {
    const fechaActual = new Date()

    if (conHora === true) return fechaActual.toLocaleString()
    return fechaActual.toLocaleDateString()
}

function saludarEspanol() {
    return "Hola como estas? Espero disfrutes tu visita por nuestra pagina!"
}
function saludarIngles() {
    return "Hey, how are you? Hope you're doing well, have fun watching our page!"
}

function saludar(callbackSaludar) {
    if (typeof callbackSaludar === 'function')
        return callbackSaludar()
}


/** ----------------------------- */
/** GENERACION DE LA PAGINA */
const ingles = false

if (ingles === true) {

    document.write(`<div class="alert alert-primary" role="alert">
        ${saludar(saludarIngles)}
    </div>`)

} else {

    document.write(`<div class="alert alert-primary" role="alert">
        ${saludar(saludarEspanol)}
    </div>`)

}

document.write(`<p class='text-danger'>La fecha del dia es ${fechaComoTexto()}</p>`)

document.write("<h2 class='text-decoration-underline my-5'>Porque nos elegin nuestros clientes</h2>")

document.write(`<p>${TEXT_RELLENO}</p>`)
document.write(`<p>${TEXT_RELLENO}</p>`)

document.write("<h2 class='text-decoration-underline my-5'>Catalogo de productos</h2>")

document.write(TARJETAS_FALSAS)

document.write("<h2 class='text-decoration-underline my-5'>No te pierdas estas promociones</h2>")

document.write(`<p class='text-danger'>${fechaComoTexto(true)}</p>`)

