export const limpiarPersonajes = (lista) =>
  lista.map(p => ({
    nombre: p.attributes.name,
    casa: p.attributes.house ?? "Sin casa",
  }));

export const filtrarPorNombre = (lista, texto) =>
  lista.filter(p => p.nombre.toLowerCase().includes(texto.toLowerCase()));

