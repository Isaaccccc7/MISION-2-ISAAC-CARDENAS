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

    const filtro = document.getElementById("filtro-casa");

    filtro.addEventListener("change", filtrar);

    function filtrar() {
      mostrarPersonajes(filtrarPorCasa(personajes, filtro.value));
    }
  } catch (error) {
    mostrarError(error.message);
  }

}




main();