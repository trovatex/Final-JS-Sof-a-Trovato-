let reserva, total

let nombre = (prompt("Bienvenido al Hostel TROVATEX BUZIOS! Ingrese su nombre para continuar.")).toLowerCase();

// if (nombre != (isNaN)) {
//   alert(`por favor, ingrese un nombre válido`)} // hacer que este ciclo continue, porque se corta
    
let dia = parseFloat (prompt(`Hola ${nombre}! Cuantos días te gustaría estar en el paraíso?`))

let personas = parseFloat (prompt("Cuantas personas se van a hospedar en el hostel?"))

const descuento = 0.15
cupon = parseInt (prompt("Tiene cupon de descuento?"))
if (cupon == "si") {
  total = total * descuento
} 




const multiplicar = (dias, personas) => dias * personas
console.log(multiplicar)

// function precio (parametro1, parametro2) {
//  return parametro1, parametro2
// }
//  let multiplicar = multiplicar (dia * personas)
//     console.log (precio)





// function sumar (parametro1, parametro2) {
//     return parametro1 + parametro2
// }
// let sumar = sumar (dias, personas)


