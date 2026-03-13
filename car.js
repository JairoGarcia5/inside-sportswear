let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("listaCarrito");
const totalElemento = document.getElementById("totalCarrito");

function mostrarCarrito(){

lista.innerHTML = "";

let total = 0;

carrito.forEach(function(producto){

const item = document.createElement("div");

item.innerHTML = `
<h3>${producto.nombre}</h3>
<p>Precio: Q${producto.precio}</p>
<button onclick="eliminarProducto(${index})">Eliminar</button>
`;

lista.appendChild(item);

total += producto.precio;

});

totalElemento.textContent = total;

}

mostrarCarrito();