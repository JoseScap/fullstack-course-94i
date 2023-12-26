const edad1 = 24
const persona1 = "Cosme Fulanito"
const persona1Universidad = true
const persona1Licencia = true
const persona1Empleado = false
const persona1Autonomo = false
const sueldo = 4500000

const edad2 = 32
const persona2 = "Esteban David"

// If es una estructura condicional, ya que en base a un valor de verdad va a ejecutar alguna accion

// If ( pregunta que puede ser verdera o falsa )
// {
// dentro de las llaves esta la accion si la pregunta es verdadera
// }
if (edad1 > edad2) {
    console.log(persona1 + " es mayor que " + persona2)
    console.log(edad1 + " > " + edad2)
}
// Si la pregunta que se hizo arriba es falsa, ejecutamos lo que esta debajo
else {
    console.log(persona1 + " no es mayor que " + persona2)
    console.log(edad1 + " <= " + edad2)
}

if (persona1Universidad) {
    console.log(persona1 + " va a la universidad")
}

if (edad1 > 18 && persona1Licencia) {
    console.log(persona1 + ' puede conducir')
}

if (persona1Empleado || persona1Autonomo) {
    console.log(persona1 + ' puede acceder a un credito millonario con solo DNI')
}

if (sueldo < 1000000) {
    console.log("Tiene categoria A -> " + sueldo)
}
else if (sueldo >= 1000000 && sueldo < 2000000) {
    console.log("Tiene categoria B -> " + sueldo)
}
else if (sueldo >= 2000000 && sueldo < 3000000) {
    console.log("Tiene categoria C -> " + sueldo)
}
else if (sueldo >= 3000000 && sueldo < 4500000) {
    console.log("Tiene categoria D -> " + sueldo)
}
else {
    console.log("Tiene categoria E -> " + sueldo)
}

const dia = 'MARTES'

switch (dia) {
    case 'LUNES':
        console.log('Lunes trabajo sin ganas')
        break; // Aqui finaliza el caso
    case 'MARTES':
    case 'JUEVES':
        console.log('Martes/Jueves trabajo con ganas, enseño a la 94I')
        break; // Aqui finaliza el caso
    case 'MIERCOLES':
        console.log('Tengo muchas reuniones, fiaca')
        break; // Aqui finaliza el caso
    case 'VIERNES':
        console.log('Es finde, a dormir y descansar')
        break; // Aqui finaliza el caso
    default:
        console.log('Hoy es sabado/domingo, no hago nada.')
        break;
}