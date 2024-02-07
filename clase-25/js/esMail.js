// const mail = prompt('Ingrese un mail')

// let hayArroba = false

// for (let i = 0; i < mail.length; i++) {
//     if (mail[i] === '@') hayArroba = true
// }

// if (hayArroba === true) {
//     document.write(`<p>Es un mail "${mail}"</p>`)
// } else {
//     document.write(`<p>No es un mail "${mail}"</p>`)
// }

const mail = prompt('Ingrese un mail')

const hayArroba = mail.includes("@")

if (hayArroba === true) {
    document.write(`<p>Es un mail "${mail}"</p>`)
} else {
    document.write(`<p>No es un mail "${mail}"</p>`)
}