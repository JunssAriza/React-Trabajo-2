// 1. Sumar
function sumar(a, b) {
  return a + b;
}

// 2. Restar
function restar(a, b) {
  return a - b;
}

// 3. Multiplicar
function multiplicar(a, b) {
  return a * b;
}

// 4. Dividir
function dividir(a, b) {
  return a / b;
}

// 5. Calcular Promedio
function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

// --- Pruebas mostrando con console.log() ---

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));
console.log("Promedio:", calcularPromedio(4.0, 3.5, 4.5), "\n");

/*
  Cuál es la diferencia entre console.log() Y return:

  - return: Es la salida "real" de la función. Devuelve un valor al programa
    para que pueda ser guardado en una variable, usado en operaciones o pasado
    a otra función. Además, finaliza la ejecución de la función.

  - console.log(): Solo imprime o muestra un mensaje en la consola para el 
    desarrollador (para depurar o ver datos). No devuelve ningún valor útil 
    al código ni afecta el flujo de la función.
*/

console.log("--------------------------------");
// --- Reto 2: Funciones flecha ---
console.log("Funciones flecha (Arrow Functions)\n");

// 1. Sumar
const sumarFlecha = (a, b) => a + b;

// 2. Restar
const restarFlecha = (a, b) => a - b;

// 3. Multiplicar
const multiplicarFlecha = (a, b) => a * b;

// 4. Dividir
const dividirFlecha = (a, b) => a / b;

// 5. Calcular Promedio
const calcularPromedioFlecha = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;

console.log("Ejemplos:");
console.log("Suma (flecha):", sumarFlecha(10, 5));
console.log("Resta (flecha):", restarFlecha(10, 5));
console.log("Multiplicación (flecha):", multiplicarFlecha(10, 5));
console.log("División (flecha):", dividirFlecha(10, 5));
console.log("Promedio (flecha):", calcularPromedioFlecha(4.0, 3.5, 4.5), "\n");

console.log("Ejercicios:");
// 1. Cuadrado (forma corta con retorno implícito)
const cuadrado = numero => numero * numero;

// 2. Es mayor de edad (retorna true o false)
const esMayorEdad = edad => edad >= 18;

// 3. Nombre completo (recibe dos parámetros)
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

// --- Comprobación de resultados ---

console.log("Cuadrado de 5:", cuadrado(5));
console.log("¿Es mayor de edad (20)?:", esMayorEdad(20));
console.log("¿Es mayor de edad (15)?:", esMayorEdad(15));
console.log("Nombre completo:", nombreCompleto("Juan", "Pérez"));
console.log("--------------------------------");


// --- Reto 3: Arreglos y Objetos ---
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Audio', stock: 8 },
  { id: 5, nombre: 'Micrófono', precio: 85000, categoria: 'Audio', stock: 0 },
  { id: 6, nombre: 'Silla Gamer', precio: 450000, categoria: 'Mobiliario', stock: 2 },
  { id: 7, nombre: 'Mousepad', precio: 30000, categoria: 'Perifericos', stock: 12 },
  { id: 8, nombre: 'Webcam', precio: 180000, categoria: 'Video', stock: 4 },
  { id: 9, nombre: 'Escritorio', precio: 320000, categoria: 'Mobiliario', stock: 1 },
  { id: 10, nombre: 'Parlantes', precio: 95000, categoria: 'Audio', stock: 6 }
];


// --- Reto 4: forEach() ---
console.log("\nforEach() \n");
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});


// --- RETO 5: map() ---
// Arreglo de nombres
const nombres = productos.map(producto => producto.nombre);

// 1. Precios con IVA (19%)
const preciosConIva = productos.map(producto => producto.precio * 1.19);

// 2. Nombres en mayúscula
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());

// 3. Resumen de productos
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);

console.log("--- Reto 5: map() ---");
console.log("Nombres:", nombres);
console.log("Precios con IVA:", preciosConIva);
console.log("Nombres en Mayúscula:", nombresMayuscula);
console.log("Resumen:", resumenProductos);


// --- RETO 6: filter() y find() ---
// 1. Productos con precio > $100.000
const mayorCienMil = productos.filter(producto => producto.precio > 100000);

// 2. Productos con precio entre $50.000 y $200.000
const rangoPrecio = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);

// 3. Filtrar categoría 'Audio'
const categoriaAudio = productos.filter(producto => producto.categoria === 'Audio');

// 4. Buscar el producto con id 5
const productoId5 = productos.find(producto => producto.id === 5);

// 5. Función buscarProducto(id)
const buscarProducto = (id) => productos.find(producto => producto.id === id);

console.log("\n--- Reto 6: filter() y find() ---");
console.log("Precio > $100.000:", mayorCienMil);
console.log("Precio $50k - $200k:", rangoPrecio);
console.log("Categoría Audio:", categoriaAudio);
console.log("Producto ID 5:", productoId5);
console.log("Búsqueda dinámica ID 8:", buscarProducto(8));


// --- RETO 7: some(), every() y reduce() ---
// 1. ¿Existe algún producto agotado?
const hayAgotados = productos.some(producto => producto.stock === 0);

// 2. ¿Existe algún producto con precio mayor a $1.000.000?
const hayMillonarios = productos.some(producto => producto.precio > 1000000);

// 3. ¿Todos los productos tienen precio mayor que cero?
const preciosValidos = productos.every(producto => producto.precio > 0);

// 4. ¿Todos los productos tienen stock mayor o igual que cero?
const stockValido = productos.every(producto => producto.stock >= 0);

// 5. Valor total del inventario (precio * stock)
const valorInventario = productos.reduce(
  (total, producto) => total + (producto.precio * producto.stock), 
  0
);

console.log("\n--- Reto 7: some(), every() y reduce() ---");
console.log("¿Hay agotados?:", hayAgotados);
console.log("¿Hay productos > $1.000.000?:", hayMillonarios);
console.log("¿Todos tienen precio > 0?:", preciosValidos);
console.log("¿Todos tienen stock >= 0?:", stockValido);
console.log("Valor total del inventario: $", valorInventario);


// --- RETO 8: JavaScript moderno ---
// Copia de un producto cambiando precio y stock sin modificar el original (Spread operator)
const productoCopia = {
  ...productos[0],
  precio: 60000,
  stock: 10
};

// Template literal + Operador ternario
const mensajeEstado = `El producto ${productoCopia.nombre} tiene un nuevo precio de $${productoCopia.precio} y su estado es: ${productoCopia.stock > 0 ? 'Disponible' : 'Agotado'}`;

console.log("\n--- Reto 8: JS Moderno ---");
console.log("Original:", productos[0]);
console.log("Copia modificada:", productoCopia);
console.log(mensajeEstado);