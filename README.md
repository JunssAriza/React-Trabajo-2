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

 Nuevas Funcionalidades Implementadas

En esta actualización, la aplicación pasó de ser un prototipo temporal a un gestor de inventario completamente funcional con soporte para las siguientes características:

Persistencia de datos con `localStorage`: Los productos agregados, editados, eliminados o con modificaciones de stock se guardan de forma permanente en el almacenamiento local del navegador. Los datos ya no se borran al recargar la página (F5) ni al cerrar el navegador.
Uso del hook `useEffect()`:
  Sincronización automática del inventario con `localStorage` cada vez que el estado de productos sufre una modificación.
  Carga y actualización en tiempo real de los datos en el formulario cuando se selecciona un producto para editar.
Edición de productos: Posibilidad de corregir y actualizar el nombre, la categoría, el precio y el stock de cualquier producto existente.
Formulario reutilizable: El componente `FormularioProducto` fue adaptado para alternar de manera fluida entre los modos "Agregar nuevo producto" y "Editar producto".
Búsqueda y Filtros avanzados:
Búsqueda por nombre sin distinción de mayúsculas/minúsculas.
Filtro por categorías.
Filtro por estado de disponibilidad (Todos, Disponibles, Agotados).
Ordenamiento dinámico: Módulo de ordenamiento que permite organizar la vista del catálogo sin modificar el estado original (A-Z, Precio: menor a mayor, Precio: mayor a menor, Stock: menor a mayor, Stock: mayor a menor).