export const ProductCategoria = {
  OFICINA: "Oficina",
  ACCESORIOS: "Accesorios",
  MUEBLES   : "Muebles",
  TECNOLOGIA: "Tecnología",
  ALMACANAMIENTO: "Almacenamiento",
  AUDIO: "Audio",
  REDES : "Redes",
} as const;
export type ProductCategoriaType = typeof ProductCategoria[keyof typeof ProductCategoria];