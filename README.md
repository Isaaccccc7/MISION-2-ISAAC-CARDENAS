# Personajes Harry Potter

Misión 2 · Async Odyssey — Guía de Harry Potter

## Cómo probarlo
npm install
npm run dev

Abre la dirección que indica la terminal http://localhost:5173.
Verás "Cargando personajes…" unos segundos, porque se piden todas las páginas de
la API y tarda un poco en dar todos los datos. Después aparece una card por personaje con
todos sus datos y un desplegable de arriba filtra por casa.

Utilicé Vite que consume la API pública [PotterDB](https://api.potterdb.com/v1/)
con `fetch` + `async/await` y muestra una card por personaje, con filtro por casa.

## Uso de IA
Usé Claude como herramienta de apoyo durante el desarrollo del proyecto. Prompts que utilicé: "Explícame cómo debo organizar los módulos de render, main, API y lógica"(Me propuso un módulo por trabajo: API.js pide los datos, logica.js los transforma con map y filter, render.js los pinta en el DOM y main.js los une dentro de un try/catch, y seguí esa estructura) o "No entiendo cómo funciona la llamada a esta API, porque sí me da todos los personajes pero me los da en páginas"(Me explicó que la API devuelve como máximo 100 personajes por página, así que metí la petición en un bucle while que pide páginas mientras links.next tenga valor) o "¿Cómo sería la forma más dinámica de crear las tarjetas de los personajes, con un innerHTML?"(Me propuso una lista de pares etiqueta-clave que recorro con map para generar el HTML de cada card y unirlo con join antes de asignarlo a innerHTML, en vez de escribir 16 líneas iguales).

He utilizado la IA para las dudas sobre fetch, async/await y los módulos, revisar errores y proponer mejoras a partir de la corrección del Web Arena, donde la primera entrega sacó un 4,5 porque main.js solo tenía un import con la ruta mal, el HTML no tenía el elemento salida y no se mostraban los estados de carga ni de error.

## Autopsia
1. Pido las páginas de la API en un bucle, una detrás de otra, en vez de hacer una
   sola petición (solo devolvería 50 personajes) o lanzar todas a la vez con
   `Promise.all`. Descarté `Promise.all` porque son unas 53 peticiones simultáneas
   y no sé si la API limita las peticiones seguidas. El precio es que tarda más en cargar.
2. El filtro por casa se utiliza con los datos cargados, con `filter`, en vez de
   pedir a la API una lista distinta cada vez que cambio el desplegable. Descarté
   filtrar en el servidor porque habría una petición nueva por cada cambio y no
   he comprobado que la API acepte ese filtro sobre `house`.
3. `API.js` lanza el error con `throw` y el `try/catch` está en `main.js`, en vez de
   capturarlo dentro de `API.js` y devuelve una lista vacía. Descarté devolver `[]`
   porque el error solo se vería en la consola y la pantalla mostraría «No hay
   resultados» en lugar del estado de error, que es lo que pide la misión.