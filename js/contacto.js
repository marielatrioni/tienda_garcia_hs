document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const errorMensaje = document.getElementById('error-mensaje');
  
    errorMensaje.style.display = 'none';
    errorMensaje.textContent = '';
  
    let isValid = true; 
  
    // Validación los 3 campos
    if (nombre === '') {
      isValid = false;
      errorMensaje.textContent += 'El campo de nombre es obligatorio.\n';
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
      isValid = false;
      errorMensaje.textContent += 'El campo de correo electrónico es obligatorio.\n';
    } else if (!emailRegex.test(email)) {
      isValid = false;
      errorMensaje.textContent += 'Por favor, ingresa un correo electrónico válido.\n';
    }
  
    if (mensaje === '') {
      isValid = false;
      errorMensaje.textContent += 'El campo de mensaje es obligatorio.\n';
    }
    if (!isValid) {
      errorMensaje.style.display = 'block';
    } else {
      this.submit()
    }
  });