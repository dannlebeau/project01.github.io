//Formulario 1
const btnEnviar = document.querySelector("#submit");
btnEnviar.addEventListener("click", enviarFormulario);


function enviarFormulario(event) {
    console.log("La función enviarFormulario se ha ejecutado correctamente");
  
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Obtener los valores de los campos del formulario
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#phone").value;
    const motivo = document.querySelector("#motivo").value;
    const comentario = document.querySelector("#comentario").value;
  
    // Hacer algo con los valores, como enviarlos al servidor
    // En este ejemplo, simplemente los imprimimos en la consola
    console.log("Nombre:", nombre);
    console.log("Correo electrónico:", email);
    console.log("Teléfono:", telefono);
    console.log("Motivo:", motivo);
    console.log("Comentario:", comentario);
  
    // Mostrar el mensaje de agradecimiento al usuario
    const mensaje = `Muchas gracias ${nombre} hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${email}`;
    alert(mensaje);
  }
  