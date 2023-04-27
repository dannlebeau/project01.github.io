const form = document.getElementById('form_1');

 

form.addEventListener('submit', (event) => {
  // Cancelar el envío del formulario
  event.preventDefault();

 

  // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const motivo = document.getElementById('motivo').value;
    const comentario = document.getElementById('comentario').value;

 // Mostrar mensaje de agradecimiento
    alert('Muchas gracias ${nombre} hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${email}');   

 

  // Validar que los campos estén completos
  if (nombre === '' || email === ''  || phone === ''  || motivo === ''  || comentario === '' ) {
    // Mostrar un mensaje de error
    alert('Por favor complete los campos obligatorios.');
    return;
  }

 

  // Si los campos están completos, enviar el formulario
  form.submit();

 

  // Mostrar un mensaje de agradecimiento
  alert('¡Gracias por enviar el formulario!');
});