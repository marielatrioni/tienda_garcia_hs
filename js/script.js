// Acá muestro productos desde la API
const crearHTML = (item) => {
  return `
    <article class="card" data-id="${item.id}">
      <h2>${item.title}</h2>
      <img class="img-productos" src="${item.image}" alt="${item.title}">
      <p>${item.description}</p>
      <h3>$ ${item.price}</h3>
      <button type="button" class="button-negro agregar"><i class="fas fa-shopping-basket"></i> Agregar</button>
    </article>
  `;
};

const mostrarProductos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productos = await response.json();
    const listaProductos = document.querySelector("#lista-productos");

    productos.forEach((item) => {
      listaProductos.innerHTML += crearHTML(item);
    });

    // Acá agrego productos al carrito
    listaProductos.addEventListener("click", (event) => {
      if (event.target.classList.contains("agregar")) {
        const productoCard = event.target.closest(".card");
        const producto = {
          id: parseInt(productoCard.dataset.id, 10), 
          title: productoCard.querySelector("h2").textContent.trim(),
          price: parseFloat(productoCard.querySelector("h3").textContent.trim().replace("$", "")) || 0,

          cantidad: 1,
        };
    
        console.log("Producto agregado al carrito:", producto);
        agregarAlCarrito(producto);
      }
    });
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
};


const agregarAlCarrito = (producto) => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const productoExistente = carrito.find((item) => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("El producto agregado al carrito");
};

mostrarProductos();
