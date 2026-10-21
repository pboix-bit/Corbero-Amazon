/* Capa de corrección del catálogo. EL EXCEL NO SE TOCA.
   Paloma, 21/10/2026: «no hagas cambios en el excel» y «siempre impera Amazon».
   Las dos cosas a la vez se resuelven así: el libro queda intacto y el panel
   enseña el dato de Amazon, marcado a la vista y con su fuente, en lugar de
   enseñar el del libro en silencio.

   Fuente de todo lo de aquí: informes nativos de Amazon del 14/10/2026,
   «Informe de todos los listings» e «Inventario gestionado por Amazon»,
   que es la misma fecha de corte que el libro, así que son comparables.

   Esto es un parche, no un arreglo: mientras el Excel no incorpore las dos
   referencias que faltan, esta capa las seguirá añadiendo cada semana. */
window.CORRECCIONES = {
  fecha: "14/10/2026",
  revisado: "21/10/2026",
  fuente: "Informe de todos los listings + Inventario gestionado por Amazon (Seller Central)",

  /* Referencias que Amazon publica y que el libro no tiene. El informe da 234
     ofertas activas y el libro 233: la que falta es la primera de estas dos.
     Columnas, en el orden del libro:
     0 Categoría · 1 Familia · 2 ASIN · 3 Modelo · 4 Título · 5 Stock Seller ·
     6 Oferta Seller · 7 Stock Vendor · 8 PVP Seller · 9 PVP Vendor ·
     10 BuyBox Seller · 11 BuyBox Vendor · 12 Score · 13 Nº reseñas ·
     14 Fecha del dato · 15 Origen de la familia */
  faltan: [
    ["FRIO", "FRIGORIFICO 4 PUERTAS", "B0HM7ZNDLS", "CF4PT4097DX-SF.",
     "Corbero - Frigorífico 4 puertas | CF4PT4097DX | 394L | 176.5cm | No Frost | Twin Eco Inverter | Tecnología ATT | Control Inteligente de temperatura | Dark Inox",
     132, "Activa Flex", null, 649, null, null, null, null, null,
     "14/10/2026", "Inferida - alta"],
    ["LAVADO", "LAVADORA CARGA FRONTAL", "B0HM7RWBSH", "CLA8J147STH-SF.",
     "Corberó - Lavadora Carga Frontal 8Kg | CLA8J147STH | 1400RPM | Motor Inverter | Tambor de Abeja | Programa Vapor | A-20% | Dark Grey",
     0, "Inactiva", null, 379, null, null, null, null, null,
     "14/10/2026", "Inferida - alta"]
  ],

  /* Precios de Seller donde el libro y Amazon no coinciden. Se enseña el de
     Amazon. `porque` explica el desajuste cuando se sabe. */
  precios: {
    "B0DDPWMY7D": { modelo: "CF2PH16724W", libro: 369, amazon: 399,
      porque: "el libro cogió el precio de la oferta FBM, que está CERRADA. La oferta viva es la de Flex, a 399 €. Y es una de las cuatro que nos quita un tercero, así que su precio se estaba mirando mal." },
    "B0HKS7MFMV": { modelo: "CCIM974EXTRA", libro: 349, amazon: 359,
      porque: "una sola oferta activa en el informe, a 359 €. El libro se quedó en 349 €." },
    "B0CP9MT9Z9": { modelo: "VOSTOK760W", libro: 179, amazon: 172,
      porque: "una sola oferta activa en el informe, a 172 €. El libro se quedó en 179 €." },
    "B0CP9L1B7H": { modelo: "VOSTOK960X", libro: 189, amazon: 175,
      porque: "una sola oferta activa en el informe, a 175 €. El libro se quedó en 189 €." }
  },

  /* Lo que se comprobó y SÍ cuadraba, para que conste que esto no es una lista
     de sospechas sino el resto de una conciliación completa. */
  cuadra: [
    "Stock de las 116 referencias Flex: las 116 exactas, 25.835 unidades, filtrando por unidades vendibles.",
    "Las 117 ofertas FBM activas: las 117.",
    "Precio de referencia de Amazon de las 116 referencias con stock FBA: las 116.",
    "Devoluciones FBM: los 93 pedidos del informe, todos.",
    "Devoluciones Flex: los 42 del informe de los últimos 14 días, todos.",
    "La alerta de «agotada con oferta viva» de CCH1824EW es correcta: sus 2 unidades están marcadas como no vendibles.",
    "Las 24 hojas del libro se publican en el panel fila a fila, sin perder ninguna."
  ]
};
