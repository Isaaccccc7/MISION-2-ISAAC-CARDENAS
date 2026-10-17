const API_URL = "https://api.potterdb.com/v1";

export async function obtenerPersonajes() {
  const personajes = [];
  let hayMas = true;

  while (hayMas) {
    const respuesta = await fetch(`${API_URL}/characters`);

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
    }

    const json = await respuesta.json();
    const datos = json.data ?? [];

    personajes.push(...datos.map(({ id, attributes }) => ({
        id,
        nombre: attributes.name,
        nacimiento: attributes.born ?? "Desconocido",
        fallecimiento: attributes.died ?? "Desconocido",
        genero: attributes.gender ?? "Desconocido",
        especie: attributes.species ?? "Desconocida",
        altura: attributes.height ?? "Desconocida",
        peso: attributes.weight ?? "Desconocido",
        pelo: attributes.hair_color ?? "Desconocido",
        ojos: attributes.eye_color ?? "Desconocido",
        piel: attributes.skin_color ?? "Desconocido",
        sangre: attributes.blood_status ?? "Desconocido",
        estadoCivil: attributes.marital_status ?? "Desconocido",
        nacionalidad: attributes.nationality ?? "Desconocida",
        animago: attributes.animagus ?? "Desconocido",
        boggart: attributes.boggart ?? "Desconocido",
        casa: attributes.house ?? "Sin casa",
        patronus: attributes.patronus ?? "Desconocido",
        imagen: attributes.image,
        wiki: attributes.wiki,
      }))
    );

    hayMas = Boolean(json.links?.next) && datos.length > 0;
    pagina++;
  }

  return personajes;
}
