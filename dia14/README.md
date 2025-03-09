# Unidades de Medida en CSS:px, %, em, rem

## Pixel

Son unidades absolutas que representan un punto en pantalla. Son ideales para tamaños y dimensiones precios que no deben cambiar en relación onotros elemntos. Es recomendable usarlo para bordes, imágenes y otros elementos d edimensión fija.

## Pordentaje

Es una relativa al tamaño del elemento padre. Ej: el ppadre es de 200px y el elemento tiene un width de 50%, el ancho del objeto será de 100px. Esta medida es útil para diseños fluidos y responsive que se adapten al tamñao de pantalla. Es recomendable para contenedores que varien según su contenedor.

## EM 
La unidad "em" es tambien ralativa al tamaño de la fuente del elemento padre (o el suyo). Por ejemplo: si el padre tiene un `font-size: 10 px;` y un `margin: 3em;` el margen será de 30px. Se usa para crear tamaños de texto y márgenes que escalen con el tamaño de la fuente. Esto mejora la accesibilidad y flexibilidad del diseño. 
Por defecto los navegadores asignan el font.sice inicial a 16px. 

## REM (Root EM)

Es relativa al tamaño de la fuente de la RAiZ del documento (normalmente es <html>). Si el tamaño de la fuente del HTML es de 8px, y un elemnto descendente en varios niveles tiene una mediad de "3rem" su medida sera de: 24px. REM es util para mantener una escala consistente en todo el documento, independientemente de la estructura del DOM. Es recomendable usar rem para tamaños globales, como el tamaño de la fuente principal y los márgenes, para garantizar coherencia en todo el sitio. 