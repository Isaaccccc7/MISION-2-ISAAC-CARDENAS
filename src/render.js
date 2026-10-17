
const salida = () => document.getElementById("salida");


const datos = [["Nacimiento", "nacimiento"], ["Fallecimiento", "fallecimiento"], ["Género", "genero"], ["Especie", "especie"], ["Altura", "altura"], ["Peso", "peso"], ["Pelo", "pelo"], ["Ojos", "ojos"], ["Piel", "piel"], ["Estatus de sangre", "sangre"], ["Estado civil", "estadoCivil"], ["Nacionalidad", "nacionalidad"], ["Animago", "animago"], ["Boggart", "boggart"], ["Casa", "casa"], ["Patronus", "patronus"]];

const tarjeta = (p) => `
  <div class="tarjeta">
    ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}"/>` : ""}
    <h3>${p.nombre}</h3>
    ${datos.map(([etiqueta, clave]) =>
      `<p><b>${etiqueta}:</b> ${p[clave]}</p>`).join("")}
    ${p.wiki ? `<p><a href="${p.wiki}">Ver en la wiki</a></p>` : ""}
  </div>`;

export const mostrarCargando = () => { salida().innerHTML = "<p class='estado'>⏳ Cargando personajes…</p>"; };
export const mostrarError = (mensaje) => { salida().innerHTML = `<p class="estado error">⚠ ${mensaje}</p>`; };
export const mostrarVacio = () => { salida().innerHTML = "<p class='estado'>No hay resultados.</p>"; };

export function mostrarPersonajes(lista) {
  if (lista.length === 0) {
    mostrarVacio();
    return;
  }
  salida().innerHTML = lista.map(tarjeta).join("");
}