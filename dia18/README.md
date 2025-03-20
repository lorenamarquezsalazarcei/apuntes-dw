# Transiciones en CSS

Es una forma de cambiar los valores de una o más propiedades  de manera suave y gradual. Se pueden aplocar transiciones o cualquier propiedad que acepte valores númericos o de color. Por ejemplo: width, height, padding, color, background-color, opacity, etc.


Propiedades numéricas:
- Font-size
- Margin
- Border-width
- Transform (propiedades como: scale, rotate, translate, etc.)


Propiedades ccolor:
- background-color
- color
- border-coler
- box-shadow

## Como se define
Utilizamos la propiedad `transition` y se puede personalizar de la siguiente manera:
- `transition-property`: nos idica la propiedad a animar.
- `transition-duration`: duración de la animación (en seg)
- `transition-timing-function`: La manera en que se va a llevar a cabo la animación.
- `transition-delay`: demora antes de iniciar la transición.
```css
div{
    transition-property: font-size;
    transition-duration:4s;
    transition-timing-function: ease-in-out;
    transition-delay:2s;
}
que es igual que: 

div{
    transition: font-size 4s ease-in-out 2s;
    }
```

## Timing Functions
- `ease`: velocidad lenta-rápida-lenta (por defecto)
- `linear`: velocidad constante
- `ease-in`: lento- rápida
- `ease-out`: rápida-lenta
- `ease-in-out`: lenta-rápida- lenta (más brúsca)
- `cubic-bezier`; (Timing Personalizado)
