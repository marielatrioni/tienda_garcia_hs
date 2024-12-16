const crearHTML = (item) => {
  const html = `
              <article #lista-productos data-id="${item.id}">
                  <h2>${item.title}</h2>
                  <img class="img-productos" src="${item.image}" alt="${item.title}">
                  <p>${item.description}</p>
                  <h2>$ ${item.price}</h2>
                  <button type="button" class="button-negro"><i class="fas fa-shopping-basket"></i>Agregar</button>
              </article>
          `;

  return html;
};

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((array) => {
//     console.log(array);
//     const listaProductos = document.querySelector("#lista-productos");
//     listaProductos.innerHTML = "";

//     array.forEach((item) => {
//       const elementos = crearHTML(item);
//       //   console.log(elementos);
//       listaProductos.innerHTML += elementos;
//     });
//   })
//   .catch((error) => console.error(error));

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
