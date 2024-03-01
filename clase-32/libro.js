let isbnContador = 10_000_000

class Libro {
    constructor(titulo, autor, paginas) {
        this.isbn = isbnContador
        isbnContador++
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarLibro() {
        console.log(
            `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} páginas`
        )
    }
}

const libro1 = new Libro('El hobbit', 'JRT', 700)
const libro2 = new Libro('El señor de los anillos', 'JRT', 750)

libro1.mostrarLibro()
libro2.mostrarLibro()

if (libro1.paginas > libro2.paginas) {
    console.log(libro1.titulo, 'tiene más paginas. Son', libro1.paginas, '!')
} else {
    console.log(libro2.titulo, 'tiene más paginas. Son', libro2.paginas, '!')
}