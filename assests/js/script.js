



//Formulario 1
const btnEnviar = document.querySelector("#submit");
btnEnviar.addEventListener("click", enviarFormulario);


function enviarFormulario(event) {
    console.log("La función enviar formulario se ha ejecutado correctamente");
  
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






    //Formulario 2---> JQuery
   /* $(document).ready(function() {
        $("#reservarBtn").click(function() {
          var nombre = $("#name").val();
          var email = $("#email").val();
          var telefono = $("#phone").val();
          var fecha = $("#date").val();
          var hora = $("#time").val();
          var cantidad = $("#quantity").val();

          if (nombre === "") {
            alert("El campo de nombre es obligatorio");
            return;
          }

          if (email === ""){
            alert("el campo correo electronico es obligatorio");
            return;
          }
          
          if (telefono === ""){
            alert("el campo telefono es obligatorio");
            return;
          }
          if (fecha === ""){
            alert("el campo fecha es obligatorio");
            return;
          }
          if (hora === ""){
            alert("el campo hora es obligatorio");
            return;
          }

          if (cantidad === "" || cantidad >6){
            alert("el campo cantidad es obligatorio");
            return;
          }
          
          var mensaje = "Estimado " + nombre + ", agradecemos por reservar con nosotros. Hemos registrado " + cantidad + " asistentes, para el " + fecha + " a las " + hora + ". Se ha enviado el código de confirmación al correo " + email + " y al número " + telefono + ".";
          console.log(mensaje)
          alert(mensaje);
          return true;
        });
      });*/

      $(document).ready(function() {
        $("#reservarBtn").click(function() {
          var nombre = $("#name").val();
          var email = $("#email_1").val();
          var telefono = $("#phone_1").val();
          var fecha = $("#date").val();
          var hora = $("#time").val();
          var cantidad = $("#quantity").val();
          var mensaje = "Estimado " + nombre + ", agradecemos por reservar con nosotros. Hemos registrado " + cantidad + " asistentes, para el " + fecha + " a las " + hora + ". Se ha enviado el código de confirmación al correo " + email + " y al número " + telefono + "." + "Gracias por preferirnos";
          alert(mensaje);
          console.log(nombre)
          console.log(email)
          console.log(telefono)
          console.log(fecha)
          console.log(hora)
          console.log(cantidad)
          console.log(mensaje)
          return true;
        });
      });
      


