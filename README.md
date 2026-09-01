Tienda React

Aplicación de comercio electrónico desarrollada con React y Vite.

Tecnologías
React
JavaScript
CSS
Vite
Instalación

npm install

npm run dev

Descripción

Proyecto de una tienda con catálogo de productos, búsqueda, carrito y diseño responsive.

funcionalidades: ## Taller 3 
La aplicación ahora permite: 
- Agregar productos 
- Validar formularios 
- Eliminar productos 
- Modificar stock 
- Calcular inventario dinámicamente 
- Gestionar estado con useState 

Mision 0 1/09/2026
Causa: useState() únicamente guarda la información en la memoria RAM del navegador mientras la aplicación está en ejecución. Al refrescar la página, todo el árbol de componentes de React se destruye, el código JavaScript se ejecuta desde cero y el estado vuelve a inicializarse con sus datos de arranque.