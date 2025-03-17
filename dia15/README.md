# GRID
Grid es un sistema de maquetación bidimensional para crear interfaces y layouts tipo tablas. 
Se compone de filas y columnas, y se pueden anidar unos de otros. 
Se pueden crear layout complejos con muy pocas líneas de código.
- nos sirve para crear layouts
- No es opuesto a Flex, se pueden combinar entre ellos.
- Grid si sustituye a las <tables> para el armado de layouts

Utilizamos `display:grid`para crar un grid y `grid-template-columns`y `grid-template-row` para definir el númeo de columnas y filas. 

```css
/* layour de 3x3 */
.container{
    display:grid;
    grid-template-columns:100px 100px 100px;
    grid-template-row: 100px 100px 100px;
}
```
Pueden visualizar el layout de Grid desde la consola de chrome

Podemos indicar a cada item, donde posicionarlo usando `grid-row-start`, `grid-row-end`, `grid-column-start` y `grid-column-end`, teniendo en cuenta que las filas y col empiezan en 1 no en 0.

Si queremos que ocupe 3 columnas y 1 fia, debemos indicar que comience en la col 1 y termine en la col 4. Y que la fila comience en la 1 y termine en la 2.

```css
.item-1{
    grid-column-start:1;
    grid-column-end:4;
    grid-row-start:1;
    grid-row-end:2;
    background-color:lightgreen;
}
```

En vez de seleccionar la fila/coluna de destino, podemos utilizar span para indicar cuantas filas/columnas queremos que un tiem. 

```css
.item-1{
    grid-column-start:1;
    grid-column-end: span 2;
    grid-row-start:1;
    grid-row-end:span 3;
    background-color:lightgreen;
}
```
Con grid es muy simple crear un elemento por encima de otro. 
Podemos utilizar grid-gap para definir un espacio entre las columnas y filas. El mismo soporta un valor para fila y columna, o dos valores para diferenciarlos.

```css
.container{
     display:grid;
        grid-template-columns:100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-gap: 1em 3em;
}
```

Existe la opción repeat () que nos permite repetir el número de veces que quiero para una fila o columna.

```css
.container{
     display:grid;
        grid-template-columns:repeat(3,100px);
        grid-template-rows: (3,100px);
        grid-gap: 10px;     
}
```

Si agregamos más bloques dentro de nuestro grid, se intentará ubicarlo en la primera posición libre disponible. Si no quedan posiciones libres, se creará una nueva fila. Esta nuevas celdas no tendrán el tamaño asignado en nuestro grid-template, y se llaman "grid-implictas". Podemos usar `grid-auto-rows:199px`para definir el tamaño de nuestras nuevas fila/s

Tambien exite el grid-auto-glow que nos permide definir su las nuevas celdas se crearán como filas o columnas.
```css
.container{
     display:grid;
        grid-template-columns:repeat(3,100px);
        grid-template-rows: (3,100px);
        grid-gap: 10px;     
        grid-auto-rows:1000px;
        grid-auto-flow: column;
}
```

Las unidades que podemos utilizar son px, %, em, rem, pero se le suma una nueva de valor fraccional, o fr. Este valor nos permite fraccionar el tamaño disponible. 
Por ejemplo, si tenemos 3 columnas y definimos que la primera columna tenga un tamaño de 1fr, la segunda de 2fr y la tercera de 1fr, la segunda columna ocupará el doble de espacio que las otras 2.
```css
.container{
     display:grid;
        grid-template-columns: 1fr 2fr 1 fr;
        grid-template-rows: (3,100px);
        grid-gap: 10px;     
}
```