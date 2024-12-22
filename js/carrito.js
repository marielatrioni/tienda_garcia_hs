const carritoContenido = document.querySelector("#carrito-contenido");
const totalCarrito = document.querySelector("#total");

// Acá muestro los productos en el carrito
const cargarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoContenido.innerHTML = "";
    console.log("Cargando carrito:", carrito);
    if (carrito.length === 0) {
      carritoContenido.innerHTML = "<p>El carrito está vacío</p>";
      totalCarrito.textContent = "Total: $0.00"; 
    } else {
      let total = 0;
      carrito.forEach((item) => {
        carritoContenido.innerHTML += `
          <div class="item-carrito">
            <p title><strong><i class="fa fa-check-square" aria-hidden="true"></i></strong> ${item.title}</p>
            <p price><strong>Precio:</strong> $${item.price}</p>
            <p cantidad><strong>Cantidad:</strong> ${item.cantidad}</p>
            <button class="eliminar-item button-negro" data-id="${item.id}">Eliminar</button>
          </div>
        `;
        total += item.price * item.cantidad;
      });
      totalCarrito.textContent = `Total: $${total.toFixed(2)}`; 
    }
  };
  
// Acá vacío el carrito
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
if (vaciarCarritoBtn) {
  vaciarCarritoBtn.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    cargarCarrito();
  });
}

// Acá elimino el producto del carrito, pero no pude hacer que descuente la cantidad
carritoContenido.addEventListener("click", (event) => {
  if (event.target.classList.contains("eliminar-item")) {
      const id = event.target.dataset.id;
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito = carrito.filter((item) => item.id.toString() !== id.toString());
      localStorage.setItem("carrito", JSON.stringify(carrito));
      cargarCarrito();
  }
});

cargarCarrito();
