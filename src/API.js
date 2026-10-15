const API_URL = "https://api.potterdb.com/v1";

export async function obtenerPersonajes() {
  const respuesta = await fetch(`${API_URL}/characters`);

  if (!respuesta.ok) {
    throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
  }

  const json = await respuesta.json();
   return json.data.map(({ id, attributes }) => ({
    id,
    nombre: attributes.name,
    casa: attributes.house ?? "Sin casa",
    especie: attributes.species ?? "Desconocida",
  }));
}
