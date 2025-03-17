# BEM (Block, Element, Modifier)
# Suite CSS
- Block--> Componente
- Elemet --> Elemento
- Modifier --> Modificador

nuevos
- utilties
- estados

## Utilties:
- Se escribe con `u-utilityName` por ejemplo `u-red`

```css
.u-red{
    background-color: red;
    color:white;
}

.u-big{
    font-size: 5rem;
}
/* utilities responsive */

.u-sm-text{
    /* texto pequeño */
}

.u-sd-text{
    /* texto mediano */
}
.u-lg-text{
    /* texto grande */
}
```

# Componente

Igual al boque de BEM se escribe con OascalCAse. Por ejemplo `Header`. `Mibotón`, `SecciónHero`.

# Elementos (Part, DescendentName)

Igual que el elemento en BEM, pero se escribe con camelCase. Por ejemplo `Header-title`, `Card-imageFront`, `Tweet-bodyImage`, `Tweet-bodyIText`

```css
<article class="Tweet">
    <header class="Tweet-header">
        <img clas="Tweet-headerImage"src"" alt"">
        ....
    </header>
    <div class="Tweet-bodyText">
    ...
    </div>
</article>
```

# Modificadores

Al igual que en BEM, y se utiliza con camelCAse`Componente--nombreModificador`


```html
<button class="Button"> Boton normal </button>
<button class="Button Button--navidad"> Boton de navidad </button>

```
## Estados

Nuevo: Clases para elementos que marcan el estado de un componente/elemento. Se escribe con camelCase y usa la palabra `is-` delante.

```css

.Tweet{
}

.Tweet.is-expandend{

}
```

```html
<article class="Tweet is-expanded">
    ...
</article>

```

# Grid continuación (2/2)

Exite la optión minmax () que nos permite definir un tamaño mínimo y máximo para las columnas y filas.
```css
.container{
     display:grid;
        grid-template-columns:minmax(100px,1fr)minmax(200px,2fr)minmax(100px,1fr);
        grid-template-rows: (100px,100px,100px);
        grid-gap: 10px;     
}
```

# Grid Template Areas

Podemos nombrar las celdas utilizando `grid-template-areas` y asignando un nombre a cada una:
```css
.container{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows: repeat(3,100px);
    grid-gap: 10px; 
    grid-template-areas:    
        "header header  header"
        "main   main    sidebar"
        "footer footer  footer";
}

.item-1{
    grid-area: header;
}
.item-2{
    grid-area: main;
}
.item-3{
    grid-area: sidebar;
}
.item-4{
    grid-area: footer;
}
```

Podemos utilizar `justify-content` y `align-items` para alinear los elementos dentro de las celdas. Sus opciones posibles son:start,end,centermstretch y baseline. Por defecto se aplica strerch.
```css
.container{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows: repeat(3,100px);
    grid-gap: 10px; 
    justify-items:start;
    align-items:end;
}
```
Podemos deceirle a un item específico que se alinee de manera diferente utilizando `justify-self` y `align-self`. Sus opciones son: start,end,centermstretch y baseline. 
```css
.item-1{
    justify-self:center;
    align-self:stretch;
}
```

Podemos alinear nuestro grid en base a su contenedor utilizando `justify-content` y `align-content`. Sus opciones son: start, end, center, stretch, space-around, space-between y spac-evenly.

```css
.container{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows: repeat(3,100px);
    grid-gap: 10px; 
    justify-content:center;
    align-content:center;
}
```
Podemos crear un grid responsive con el uso de `auto-fit`. Esto nos permite que los elemntos se ajusten al tamaño del contenedor.
```css
.container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
    grid-template-rows: repeat(4,1fr);
    grid-gap: 10px; 
    justify-content:center;
}
```