const salida = document.getElementById("salida");

export const mostrarCargando = () => { salida.innerHTML = "<p>⏳ Cargando…</p>"; };
export const mostrarError = (mensaje) => { salida.innerHTML = `<p>${mensaje}</p>`; };
export const mostrarVacio = () => { salida.innerHTML = "<p>No hay resultados.</p>"; };

export function mostrarPersonajes(lista) {
  if (lista.length === 0) {
    mostrarVacio();
    return;
  }
  salida.innerHTML =
    "<ul>" + lista.map(p => `<li>${p.nombre} (${p.casa})</li>`).join("") + "</ul>";
}