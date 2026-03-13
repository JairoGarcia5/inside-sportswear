let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    {
        id: 1,
        nombre: "Licras negras",
        precio: 120,
        talla: "S-M-L",
        imagen: "maillot.png",
        categoria: "licras"
    },
    {
        id: 2,
        nombre: "Chalecos cortaviento",
        precio: 220,
        talla: "M-L-XL",
        imagen: "hoodie.png",
        categoria: "chalecos"
    },
    {   
        id: 3,
        nombre: "Maillots rojo",
        precio: 180,
        talla: "M-L",
        imagen: "jersey.png", 
        categoria: "maillots"
    },
    {
        id: 4,
        nombre: "Hoodies pro",
        precio: 160,
        talla: "M-L",
        imagen: "maillot.png",
        categoria: "hoodies"
    },
 
   {
        id: 5, 
        nombre: "Licras blancas", 
        precio: 120,
        talla: "S-M-L",
        imagen: "maillot.png",
        categoria: "licras"
    },

    {
        id: 6, 
        nombre: "Licras azules", 
        precio: 120,
        talla: "S-M-L",
        imagen: "maillot.png",
        categoria: "licras"
    },

       {
        id: 7,
        nombre: "Chalecos morado",
        precio: 220,
        talla: "M-L-XL",
        imagen: "hoodie.png",
        categoria: "chalecos"
    },

       {
        id: 8,
        nombre: "Chalecos verde",
        precio: 220,
        talla: "M-L-XL",
        imagen: "hoodie.png",
        categoria: "chalecos"
    },
    
     {   
        id: 9,
        nombre: "Maillots morado",
        precio: 180,
        talla: "M-L",
        imagen: "jersey.png", 
        categoria: "maillots"
    },

     {   
        id: 10,
        nombre: "Maillots verde",
        precio: 180,
        talla: "M-L",
        imagen: "jersey.png",  
        categoria: "maillots"
    },

      {
        id: 11,
        nombre: "Hoodies blanco",
        precio: 160,
        talla: "M-L",
        imagen: "maillot.png",
        categoria: "hoodies"
    },
      {
        id: 12,
        nombre: "Hoodies negro",
        precio: 160,
        talla: "M-L",
        imagen: "maillot.png",
        categoria: "hoodies"
    },
];

const contLicras = document.getElementById("licras");
const contChalecos = document.getElementById("chalecos");
const contMaillots = document.getElementById("maillots");
const contHoodies = document.getElementById("hoodies"); 

productos.forEach(function(producto){

const tarjeta = document.createElement("div");
tarjeta.classList.add("producto");

tarjeta.innerHTML = `
<img src="${producto.imagen}" alt="${producto.nombre}">
<h3>${producto.nombre}</h3>
<p>Precio: Q${producto.precio}</p>
<p>Tallas: ${producto.talla}</p>
<button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
`;

if(producto.categoria === "licras"){
    contLicras.appendChild(tarjeta);
}

if(producto.categoria === "chalecos"){
    contChalecos.appendChild(tarjeta);
}

if(producto.categoria === "maillots"){
    contMaillots.appendChild(tarjeta);
}

if(producto.categoria === "hoodies"){
    contHoodies.appendChild(tarjeta);
}

});

function agregarAlCarrito(id){

const producto = productos.find(p => p.id === id);

carrito.push(producto);

localStorage.setItem("carrito", JSON.stringify(carrito));

actualizarCarrito();

mostrarMensaje();

}

function actualizarCarrito(){

const contador = document.querySelector(".nav-carrito span");

contador.textContent = carrito.length;

}

function mostrarMensaje(){

const mensaje = document.getElementById("mensajeCarrito");

mensaje.style.display = "block";

mensaje.textContent = "Producto agregado al carrito";

setTimeout(function(){
mensaje.style.display = "none";
},2000);

}


actualizarCarrito();
