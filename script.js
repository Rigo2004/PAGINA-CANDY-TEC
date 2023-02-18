const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});



// Define el carrito como un arreglo vacío
var carrito = [];

// Agrega un producto al carrito
function addToCart(productoId) {
  // Busca el producto correspondiente al identificador
  var producto = productos.find(function(p) {
    return p.id === productoId;
  });
  
  // Agrega el producto al carrito
  carrito.push(producto);
  
  // Actualiza la lista de productos en el carrito
  actualizarCarrito();
}
