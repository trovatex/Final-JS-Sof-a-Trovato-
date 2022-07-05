
        let precioHabitacion = 50

        let nombre = (prompt("Bienvenido al Hostel TROVATEX BUZIOS! Ingrese su nombre para continuar.")).toLowerCase();

        // if (nombre != (isNaN)) {
        //   alert(`por favor, ingrese un nombre válido`)} // hacer que este ciclo continue, porque se corta

        let dias = parseFloat(prompt(`Hola ${nombre}! Cuantos días te gustaría estar en el paraíso?`))

        let personas = parseFloat(prompt("Cuantas personas se van a hospedar en el hostel?"))

        const descuento = 0.15

        cupon = parseInt(prompt("Tiene cupon de descuento?"))

        if (cupon == "si") {
            total = (( precioHabitacion - (precioHabitacion * descuento) ) * personas) * dias
            console.log(total)
        } else {
            total = (precioHabitacion * personas) * dias
            parseInt(prompt(`El total a pagar es de $ ${total} reales. Desea continuar con la reserva?`))
        }


// const multiplicar = (dias, personas) => dias * personas
// console.log(multiplicar)

// function precio (parametro1, parametro2) {
//  return parametro1, parametro2
// }
//  let multiplicar = multiplicar (dia * personas)
//     console.log (precio)





// function sumar (parametro1, parametro2) {
//     return parametro1 + parametro2
// }
// let sumar = sumar (dias, personas)


