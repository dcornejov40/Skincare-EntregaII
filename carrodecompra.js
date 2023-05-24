if ("0") {
  alert('Quieres comenzar?');
}

let name = prompt('COMO TE LLAMAS?');
let age = prompt('QUE EDAD TIENES ?');


let productos = [
  { id: 1, nombre: "Serum", precio: 30 },
  { id: 2, nombre: "Crema de rostro", precio: 45 },
  { id: 3, nombre: "Gel de ducha", precio: 20 },
  { id: 4, nombre: "Exfoliante", precio: 25 },
  { id: 5, nombre: "Vitamina C", precio: 70 },
  { id: 6, nombre: "Crema de Cuerpo", precio: 50 },

];
let carrito = [];
function agregarAlCarrito(id) {
  const producto = productos.find(item => item.id === id);
  carrito.push(producto);
  actualizarCarrito();
}
function eliminarDelCarrito(id) {
  carrito = carrito.filter(item => item.id !== id);
  actualizarCarrito();
}
function calcularTotal() {
  let total = 0;
  carrito.forEach(item => {
    total += item.precio;
  });
  return total;
}
function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalElement = document.getElementById("total");
  while (listaCarrito.firstChild) {
    listaCarrito.firstChild.remove();
  }

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });

  const total = calcularTotal();
  totalElement.textContent = total;
}

function inicializar() {
  const listaProductos = document.getElementById("lista-productos");
  productos.forEach(item => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Agregar al carrito";
    button.addEventListener("click", () => {
      agregarAlCarrito(item.id);
    });
    li.textContent = `${item.nombre} - $${item.precio}`;
    li.appendChild(button);
    listaProductos.appendChild(li);
  });
}

window.addEventListener("load", () => {
  inicializar();
});
