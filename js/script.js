// menú hamburguesa

let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
    
  menu_bar.addEventListener('click', function() {
    menu.classList.toggle("menu-toggle");
    
  });

// listado de productos

const crearHTML = (item) => {
  const html = `
              <article class="card" data-id="${item.id}">
                  <h2>${item.title}</h2>
                  <img class="img-productos" src="${item.image}" alt="${item.title}">
                  <p>${item.description}</p>
                  <h2>$ ${item.price}</h2>
                  <button type="button" class="button-negro"><i class="fas fa-shopping-basket"></i> Agregar</button>
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

//
