// Validar formato de fecha: Pide al usuario una fecha en formato "dd/mm/yyyy" y verifica
// si es válida.
let dia = parseInt(prompt("Ingrese un Día"));
let mes = parseInt(prompt("Ingrese un Mes"));
let anyo = parseInt(prompt("Ingrese un Año"));

document.write(`<p>${numeroInicial}/${numeroFinal}/${paso}</p>`)

if (isNaN(numeroInicial) || isNaN(numeroFinal) || isNaN(paso)) {
    document.write("<p>Por favor, ingrese valores numéricos válidos para día, mes y año.</p>");
} else if (numeroFinal < 1 || numeroFinal > 12) {
    document.write("<p>Por favor, ingrese un mes valido que este entre el 1 y el 12</p>");
} else if (numeroFinal === 2) {
    // Verificar si tiene entre 1 y 28
    const esBisiesto = paso % 4 === 0
    if (numeroInicial >= 1 && numeroInicial <= 28 && !esBisiesto) {
        document.write(`
            </p>Fecha valida: ${numeroInicial}/${numeroFinal}/${paso}</p>
        `);
    } else if (numeroInicial >= 1 && numeroInicial <= 29 && esBisiesto) {
        document.write(`
            </p>Fecha valida: ${numeroInicial}/${numeroFinal}/${paso}</p>
        `);
    } else {
        if (esBisiesto === false) {
            document.write(`
                <p>Fecha invalida: ${numeroInicial}/${numeroFinal}/${paso}</p>
                <p>Este mes tiene solo 28 dias</p>
            `);
        } else {
            document.write(`
                <p>Fecha invalida: ${numeroInicial}/${numeroFinal}/${paso}</p>
                <p>Este mes tiene solo 29 dias</p>
            `);
        }
    }
} else if (numeroFinal === 1 || numeroFinal === 3 || numeroFinal === 5 || numeroFinal === 7 || numeroFinal === 8 || numeroFinal === 10 || numeroFinal === 12) {
    // Verificar si tiene entre 1 y 31
    if (numeroInicial >= 1 && numeroInicial <= 31) {
        document.write(`
            </p>Fecha valida: ${numeroInicial}/${numeroFinal}/${paso}</p>
        `);
    } else {
        document.write(`
            <p>Fecha invalida: ${numeroInicial}/${numeroFinal}/${paso}</p>
            <p>Este mes tiene solo 31 dias</p>
        `);
    }
} else {
    // Verificar si tiene entre 1 y 30
    if (numeroInicial >= 1 && numeroInicial <= 30) {
        document.write(`
            </p>Fecha valida: ${numeroInicial}/${numeroFinal}/${paso}</p>
        `);
    } else {
        document.write(`
            <p>Fecha invalida: ${numeroInicial}/${numeroFinal}/${paso}</p>
            <p>Este mes tiene solo 30 dias</p>
        `);
    }
}
