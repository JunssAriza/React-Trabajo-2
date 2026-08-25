🛍️ Tienda React

Proyecto de una tienda en línea desarrollada con React y Vite, diseñada para mostrar productos de manera sencilla, moderna y responsive.

📋 Descripción

Esta aplicación permite crear una interfaz de comercio electrónico utilizando componentes reutilizables de React.

El proyecto cuenta con una estructura preparada para trabajar con:

🛒 Catálogo de productos
📦 Tarjetas de productos
🔎 Búsqueda de productos
💰 Visualización de precios
🛍️ Carrito de compras
📱 Diseño responsive
🎨 Interfaz moderna
⚡ Desarrollo rápido con Vite
🚀 Tecnologías utilizadas
React — Biblioteca para construir la interfaz.
Vite — Herramienta de desarrollo y compilación.
JavaScript — Lógica de la aplicación.
CSS — Diseño y estilos.
Git / GitHub — Control de versiones.
📁 Estructura del proyecto
tienda-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   └── ProductoCard.jsx
│   │
│   ├── data/
│   │   └── productos.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

⚙️ Instalación

Clona el repositorio:

git clone URL_DEL_REPOSITORIO


Entra en la carpeta:

cd tienda-react


Instala las dependencias:

npm install

💻 Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

npm run dev


Después abre en el navegador la dirección que proporciona Vite, normalmente:

http://localhost:5173

🛠️ Desarrollo

Los principales archivos del proyecto son:

App.jsx

Contiene la estructura principal de la aplicación y la lógica de la tienda.

ProductoCard.jsx

Componente encargado de representar cada producto del catálogo.

productos.js

Contiene la información de los productos que se muestran en la tienda.

App.css

Contiene los estilos visuales de la aplicación, incluyendo:

Colores
Tarjetas
Botones
Animaciones
Diseño responsive
Distribución de productos
🛒 Funcionalidades
Catálogo

Los productos se muestran mediante componentes reutilizables, permitiendo mantener un código organizado.

Búsqueda

El usuario puede buscar productos mediante el campo de búsqueda.

Carrito

La aplicación permite agregar productos al carrito y visualizar la cantidad de productos seleccionados.

Diseño responsive

La interfaz se adapta a diferentes tamaños de pantalla:

💻 Computadores
📱 Teléfonos
📲 Tablets
🌿 Ramas de Git

Para trabajar en nuevas funcionalidades se recomienda utilizar ramas independientes en lugar de trabajar directamente sobre main.

Ejemplo:

git switch -c desarrollo


Después de realizar los cambios:

git add .
git commit -m "Agrega nueva funcionalidad"
git push -u origin desarrollo


La rama main puede mantenerse como la versión principal y estable del proyecto.

📌 Estado del proyecto

🚧 En desarrollo

El proyecto se encuentra en construcción y puede incorporar nuevas funcionalidades como:

Sistema completo de carrito
Categorías de productos
Filtros
Login de usuarios
Página individual de productos
Sistema de favoritos
Proceso de checkout
Integración con una API o base de datos
👨‍💻 Autor

Proyecto desarrollado como práctica de React, JavaScript, CSS y Git.

⭐ Si te gusta el proyecto, puedes darle una estrella al repositorio.
