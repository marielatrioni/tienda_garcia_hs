document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenimos el envío del formulario para validarlo primero
  
    // Obtenemos los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const errorMensaje = document.getElementById('error-mensaje');
  
    // Limpiar cualquier mensaje de error previo
    errorMensaje.style.display = 'none';
    errorMensaje.textContent = '';
  
    let isValid = true; // Variable para saber si el formulario es válido
  
    // Validación del nombre
    if (nombre === '') {
      isValid = false;
      errorMensaje.textContent += 'El campo de nombre es obligatorio.\n';
    }
  
    // Validación del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
      isValid = false;
      errorMensaje.textContent += 'El campo de correo electrónico es obligatorio.\n';
    } else if (!emailRegex.test(email)) {
      isValid = false;
      errorMensaje.textContent += 'Por favor, ingresa un correo electrónico válido.\n';
    }
  
    // Validación del mensaje
    if (mensaje === '') {
      isValid = false;
      errorMensaje.textContent += 'El campo de mensaje es obligatorio.\n';
    }
  
    // Mostrar mensaje de error si es inválido
    if (!isValid) {
      errorMensaje.style.display = 'block';
    } else {
      // Si todo está bien, puedes enviar el formulario o realizar una acción aquí
      // Por ejemplo, puedes hacer algo como: 
      alert('Formulario enviado correctamente!');
      // El formulario se puede enviar si es necesario: this.submit();
    }
  });