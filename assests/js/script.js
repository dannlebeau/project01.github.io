//Formulario 1
const btnEnviar = document.querySelector("#submit");
btnEnviar.addEventListener("click", enviarFormulario);


function enviarFormulario(event) {
    console.log("La función enviar Formulario se ha ejecutado correctamente");
  
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Obtener los valores de los campos del formulario
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#phone").value;
    const motivo = document.querySelector("#motivo").value;
    const comentario = document.querySelector("#comentario").value;

    if (nombre === "") {
        alert("El campo de nombre es obligatorio");
        return;
      }
    
      if (email === "") {
        alert("El campo de correo electrónico es obligatorio");
        return;
      }
    
      if (telefono === "") {
        alert("El campo de teléfono es obligatorio");
        return;
      }
  
    // Hacer algo con los valores, como enviarlos al servidor
    /*fetch('http://localhost:8000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          email: email,
          telefono: telefono,
          motivo: motivo,
          comentario: comentario
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al enviar los datos');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });*/
      
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

    // Reseteo de formulario al enviarlo  --> Esta pendiente 
    //document.getElementById("form_1").reset();

