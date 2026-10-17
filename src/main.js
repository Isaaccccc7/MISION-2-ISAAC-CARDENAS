import "./style.css";
import { obtenerPersonajes } from "./API.js";
import { filtrarPorCasa, listarCasas } from "./logica.js";
import { mostrarCargando, mostrarError, mostrarPersonajes, rellenarCasas } from "./render.js";

async function main() {
  mostrarCargando();
  try {
    const personajes = await obtenerPersonajes();

    rellenarCasas(listarCasas(personajes));
    mostrarPersonajes(personajes);

    document.getElementById("filtro-casa").addEventListener("change", (e) => {
      mostrarPersonajes(filtrarPorCasa(personajes, e.target.value));
    });
  } catch (error) {
    mostrarError(error.message);
  }
}

main();