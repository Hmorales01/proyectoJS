let nombre = prompt("Hola, ¿cómo te llamas?");
alert(`Hola ${nombre}. A todos nos gustan las parrilladas en casa, cierto?`);
let continuar = prompt("¿Te gustaría saber cuánta carne comprar para una parrillada?\n (y/n)");

while (continuar == "y") {
  let personas = parseInt(prompt("¿Cuantas personas van a tu parrillada?"));
  
  let resultado = personas * 250;
  alert(`Esta es la cantidad de carne que necesitas ${resultado} gramos.`);
  
  let respuesta = prompt("¿Te gustaría saber el precio dependiendo del tipo de corte? \n Escoge entre estas opciones: vacio, ribeye, newyork.");
  
  function actualizar() {
    window.location.reload();
  }

  let precio;

  switch (respuesta) {
    case "vacio":
      precio = resultado * 0.2;
      alert(`El precio es de ${precio} pesos`);
      break;

    case "ribeye":
      precio = resultado * 0.4;
      alert(`El precio es de ${precio} pesos`);
      break;

    case "newyork":
      precio = resultado * 0.3;
      alert(`El precio es de ${precio} pesos`);
      break;

    default:
      alert("Lo siento, no tenemos ese corte de carne. ¿Lo has escrito correctamente?");
      break;
  }

  continuar = prompt("¿Te gustaría calcular de nuevo? (y/n)");

  let descuento = prompt(`Finalmente, ${nombre}; ¿Quieres ganarte un cupón de descuento? Pásanos tus datos y te lo brindaremos.\n ¿Deseas el cupón? (recuerda, solo tienes una chance de solicitarlo)\n (y/n)`);

    while (descuento == "y") {
        let correo = prompt("Escribe tu e-mail por favor");

        let telefono = prompt(`¿Nos das tu teléfono?`);

        confirmacion = prompt(`Tus datos son:\n Correo Electrónico: ${correo}\n Teléfono: ${telefono}\n ¿Confirmas? (y/n)`);
        
        if (confirmacion == "y") {
            alert("Gracias, tu cupón es: ABC1234. \n Vuelte pronto!");
            break;
        }
        else {
        alert("De acuerdo, vuelve a escribir la info")
        };
       
    }
}
actualizar()