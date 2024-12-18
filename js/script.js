// mostrar productos

const crearHTML = (item) => {
  const html = `
              <article class="card" data-id="${item.id}">
                  <h2>${item.title}</h2>
                  <img class="img-productos" src="${item.image}" alt="${item.title}">
                  <p>${item.description}</p>
                  <h2>$ ${item.price}</h2>
                  <button type="button" class="button-negro agregar"><i class="fas fa-shopping-basket"></i> Agregar</button>
              </article>
          `;

  return html;
};

const mostrarProductos = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const array = await response.json();

    console.log(array);
    const listaProductos = document.querySelector("#lista-productos");
    listaProductos.innerHTML = "";
    array.forEach((item) => {
      const elementos = crearHTML(item);
      //   console.log(elementos);
      listaProductos.innerHTML += elementos;
    });
  } catch (error) {
    console.error(error);
  }
};

mostrarProductos();

//constantes para listado de productos y carrito
const carritoContenido = document.querySelector("#carrito-contenido");
const totalCarrito = document.querySelector("#total");
const listaProductos = document.querySelector("#listado-productos");

// ------------------Productos y carrito--------------------

// carrito

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(carrito, typeof carrito);

const { id, nombre, precio } = productos[1];
// console.log(id, title, price)

const producto = {
  id: id,
  nombre: title,
  precio: price,
  cantidad: 1,
};

console.log(producto);

carrito.push(producto);
console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito));

let carritoItems = [];
let total = 0;

// Actualizar y limpiar el carrito
const actualizarCarrito = () => {
  carritoContenido.innerHTML = ""; 

  if (carritoItems.length === 0) {
    carritoContenido.innerHTML = "<p>El carrito está vacío</p>";
  } else {
    carritoItems.forEach((item) => {
      carritoContenido.innerHTML += `
        <div class="item-carrito">
          <p><strong>Delicia:</strong> ${item.title}</p>
          <p><strong>Precio:</strong> $${item.price}</p>
          <p><strong>Cantidad:</strong> ${item.cantidad || 1}</p> <!-- Mostramos la cantidad si se ha agregado más de un producto -->
          <button class="eliminar-item" data-id="${item.id}">Eliminar</button>
        </div>
      `;
    });
  }

  totalCarrito.textContent = `Total: $${total}` // Actualiza el total
};

listaProductos.addEventListener("click", (event) => {
    if (event.target.classList.contains("agregar")) {
      const id = e.target.parentElement.getAttribute("data-id");
      const title = e.target.parentElement.querySelector("h2").textContent;
      const price = parseInt(e.target.parentElement.querySelector("h2").textContent.replace("$", ""));
  
      // Busco si el producto ya existe en el carrito
      const itemEnCarrito = carritoItems.find(item => item.id === id);
      if (itemEnCarrito) {
        itemEnCarrito.cantidad += 1; // Incremento el producto en la cantidad
      } else {
        carritoItems.push({ id, title, price, cantidad: 1 }); // Sino Agrego un nuevo producto
      }
      total += price;
  
      actualizarCarrito(); // Actualiza el carrito
    }
  });

//vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', function() { 
    localStorage.removeItem('carrito');
    subtotal=0
    cargarCarrito();
});

/* // Escucho todos los eventos click el documento
document.addEventListener("click", (event) => {
    // Si el elemento donde se hizo click contiene la clase 'agregar'
    if (event.target.classList.contains("agregar")) {
      // Busco el contenedor mas cercano que se un 'article'
      // Obtengo el id del atributo data-id
      const id = event.target.closest("article").dataset.id;
  
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      const elemento = productos.find((producto) => producto.id == id);
      console.log(elemento);
  
      // Uso destructuring para creo las constante con los valores del Objeto
      const { nombre, precio } = elemento;
  
      // Creo el objeto producto para insertar en el carrito
      const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      };
  
      carrito.push(producto);
  
      // Guardo en el localStorage el array carrito en formato JSON
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  });
 */



/* 
// carrito
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
  const html = `
        <tr data-id="${item.id}">
            <td>${item.title}</td>
            <td>${item.cantidad}</td>
            <td>$ ${item.price}</td>
            <td>$ ${item.cantidad * item.precio}</td>
            <td><i>X</i></td>
        </tr>
    `;

  items.innerHTML += html;
});

// Validación Formulario Contacto

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre");

  console.log(nombre.value.length);

  if (nombre.value.length < 4) {
    nombre.style.border = "1px solid red";
    const errorNombre = document.querySelector("#error-nombre");
    errorNombre.textContent = "El nombre tiene que tener 3 caracteres o mas";
  }
});

 */