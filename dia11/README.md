# Que es una media Query (MQ)

Declaraciones en CSS que nos permite definir que reglas aplicar a partir de unas reglas asignadas por nosotros. 

# Sintaxis de una MQ

Una MQ se compone d elas siguientes partes:
- Un @media la cual es una palabra reservada [keyword]
- un tipo de media (screen, print, all, speech)[Mediatype]
- Operadores (and, not, only) [operatos]
- Brackponts: una condición (max-widht, min-width, etc)
- Un bloque de Css (nuestras reglas CSS)

```css
/* Keyword  MediaType  Operador/es      (breakpoint) */
/* @media   screen     and              (breakpoint) */

@media not|only screen and|or (min-width:600px){
    body {
        background-color:blue;
    }

}

/* Combinar breakpoints */
@media screen and (min-width:600px) and (max-width:800px){

}

@media creen and (orientation:landscape) {
    body {
        background-color:blue;
        color:white
    }

}

```
### Media Types (screen/print)

- all: todos los dispositivos
- print: material de vista previa de impresión
- screen: pantallas a color (tablets, móvil, computadora)

- Speech: dispositivos de conversión de texto a voz.
- Otros: pueden aparecer types Depraci

Ejemplo de impresión:
```css
@media print{
    .noprint{
        display:none
    }
}
```

### Tips para utilizarlos:

- Sobreescriben las reglas de CSS normales, pero no posee una mayor especificad por lo tanto las media queries deben estar por debajo de las reglas que quiera reemplazar.

- Deben tener el mismo selector para que reemplace la regla que deseamos.  Como excepción podemos utilizar las reglas principales en vez de específicas (background para reemplazar background-color)

- Pensar bien ls breakpoints
- Podemos utilizar un @media para cada selector, o una sola para todos los selectores (recomendado)
``` css
.body {
    color:green
}
@media print{
.body {
    color:red
}
}
```
- Mobile First!!! 

## Mobile First
intentamos desarrollar siempre primero para el movil y luego para pantallas más grandes. De esta manera nos aseguramos de que se vea bien en dispositivos móviles.

- Mobile (55% de los dispositivos):320px-480px
- Tablets(2%):768px-1024px
- Desktop(43%): 124px- 1920px
``` css
@media only screen and (min-width:768px){

}
@media only screen and (min-width:1024px){

}
```

# Ejemplo de Media queries en Imagenes (usando picture)

```html 
<picture>
    <source media="(min.width:650px)" srcset="./img/grande.jpg">
    <source media="(min.width:450px)" srcset="./img/mediana.jpg">
<img src="./img/fotogato.jpg" alt="Mi mascota">
```