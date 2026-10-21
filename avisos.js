/* Las advertencias que viven al pie de varias hojas del Excel y que el panel
   estaba tirando a la basura al quedarse solo con las filas de datos.
   Sin ellas las cifras se leen como si fueran lo que no son. Extraídas del
   libro el 15/10/2026. */
window.AVISOS = {
  fechas: [
    "Seller Central (catálogo, stock FBM y Flex, estado de las ofertas): 14/10/2026.",
    "Vendor Central (stock e inventario): 01/10/2026. Trece días antes: tenerlo en cuenta al comparar stock entre canales.",
    "Devoluciones: los dos canales hasta el 14/10/2026. Transparency: plan OPR de 16/09/2026. Selección de Ads: fija para Q4.",
    "Posición competitiva y palabras clave: extraídas el 04/10/2026 del Analizador de oportunidades, no el día del corte."
  ],
  generales: [
    "De las 874 referencias, 864 tienen familia y canal asignados. Las 10 restantes se dejan en blanco a propósito: no hay dato suficiente para clasificarlas sin inventarlo.",
    "Unidades y facturación de Vendor son sell-in (órdenes de compra) y las de Seller son sell-out. NO son sumables ni comparables entre sí.",
    "La columna Stock Seller se lee fila a fila, pero NO se suma ni se promedia sin separar por origen: en FBM es una disponibilidad declarada con techo en 100, y en Flex es el recuento real del inventario.",
    "Un cero en una referencia Inactiva NO es rotura de stock: no hay nada publicado que se pueda vender."
  ],
  hojas: {
    "mercado": [
      "Las cifras absolutas de unidades y ventas de la herramienta de categoría corresponden a una SELECCIÓN de ASIN, no a la categoría completa, y por eso no se recogen. Lo que sí es fiable es la FORMA de la curva (pico, valle, estacionalidad), la dirección interanual y los volúmenes de búsqueda.",
      "Esa herramienta NO da cuota de mercado. Para eso hace falta Market Tracker de Helium 10, que está contratado con un mercado creado desde el 14/10/2025, pendiente de corregir la atribución de productos propios.",
      "«clics_totales_top» es la suma de los productos que Amazon lista en esa búsqueda, NO el volumen total de la palabra clave. No es tamaño de mercado.",
      "Los clics son por palabra clave: un mismo ASIN aparece en varias y sus clics NO son sumables entre búsquedas.",
      "El índice de estacionalidad normaliza las unidades de cada mes sobre el mejor mes del año de esa familia (0-100): compara la FORMA de la curva, no el tamaño.",
      "Los meses de oct-25 a ene-26 están contaminados por el arranque de Ads (0 € en octubre, 24.903 € en enero). Para juzgar fase, los meses limpios son de febrero-26 en adelante.",
      "Septiembre-26 cerró hace pocos días y MerchantSpring reexpresa al alza lo recién cerrado: parte de esa caída puede ser dato sin madurar.",
      "Las cifras de crecimiento son semestre contra semestre DENTRO del mismo año. En un mercado estacional eso vuelve a medir estacionalidad, no tendencia.",
      "No hay cuota de mercado y no se puede calcular con estas fuentes. Lo que sí se mide es la DIRECCIÓN de la cuota: si la categoría crece y nosotros crecemos menos, la perdemos."
    ],
    "ventas": [
      "Seller es SELL-OUT (lo que compra el cliente) y Vendor es SELL-IN (lo que Amazon nos compra). Son magnitudes distintas: no se suman, no se promedian y no se comparan entre sí.",
      "Una caída del sell-in de Vendor puede ser solo que Amazon tiene almacén lleno. No significa que el producto se venda menos.",
      "Las ventas que atribuye Amazon Ads son las del anuncio, no las totales del canal. Compararlas con la tabla de ventas por canal da el peso real de la publicidad.",
      "El ROAS se recalcula como ventas entre inversión del conjunto de la semana. Promediar los ROAS de cada campaña da otro número y es incorrecto.",
      "El porcentaje de BuyBox es el tiempo que la oferta destacada ha sido nuestra en Seller. Un anuncio de Sponsored Products solo se sirve mientras la tengamos, así que ese porcentaje es el techo de la publicidad.",
      "Las semanas con menos de siete días están marcadas y no deben compararse contra una completa. Los indicadores de cabecera usan solo semanas completas.",
      "Una referencia que cae a cero puede ser falta de demanda, rotura de stock u oferta cerrada: hay que mirar su oferta y su stock en la misma fila.",
      "Las marcadas Q4 son las de la hoja «Tarifa Q4-26» de la marca, casadas por número de modelo: 276 de las 327 encuentran su ASIN.",
      "Las ventas de Ads salen de la consola de Amazon y las de canal de MerchantSpring. En la inversión de Seller de W41 difieren en unos 8 euros; manda la consola."
    ],
    "hist": [
      "Cada fila es un ASIN en una semana. Las semanas marcadas «sin dato nuevo» no son mediciones: son una copia de la anterior y quedan fuera de la evolución.",
      "Las unidades y la facturación de la semana en curso no están hasta que cierra la semana ISO. Un cero ahí es «pendiente de cargar», no una caída."
    ],
    "precio": [
      "El informe de BuyBox llega con retraso. El 15/10/2026 se contrastaron sus 282 referencias contra la ficha pública y 79 no coincidían, el 28 %."
    ]
  }
};
