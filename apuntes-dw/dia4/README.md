# Día 4

## Selectores CSS

``` css
/* selector de id */
#caja1 { 
    color: blue; 
  }

/* selector de clase */
.cajaImportante {   
    color: red; 
}

/* selector de etiqueta */
div {  
    color: yellow; 
 }

 /* Selector de múltiples items */
 h1, h2, h3, p {
    color:red;
 }
 /* Selector con atributos */

img[alt="Foto 1"] {
    color:brown;
}

a[href="https://x.com/miPerfil" ]{
    backgroud:black;
    color:white;
}

div[class*="test"]{  /* el asterisco hace de comodin en la búsqueda, se le aplicará a todos los class que contenga la palabra test */
    background:salmon;
}


/* Selector de hijos directos */

header > nav > #logo > a {

}
/* Selector de todos los descendientes */
header a{

}

/* Selector del siguiente hijo */

p+a {

}
```

``` html

<header> 
    <nav> 
        <h1 id="logo"> 
            <a href="/"> Mi Página </a> 

        </h1>
        <ul>
            <li> <a href=""> Productos </li>
            <li> <a href=""> Contacto </li>
        </ul>
    </nav>
</header>

<h1 id="tituloprincipal">Título </h1>
<h4 class="subtitulo"></h4>
<img src=".img/foto.png" alt="Foto1">
<img src=".img/foto2.png" alt="Foto2">
<img src=".img/foto3.png" alt="Foto3">
<a href="https://x.com/miPerfil"> Mi Perfil en X </a>
<div class="test">caja salmon </div>
<div class="un_test">caja salmon </div>
<div class="caja" id="caja1"> soy un div </div> 
```

# Reset CSS
Buscamos que todos los navegadores inicien nuestros proyectos con los mismos estilos, sin aplicar los propios. 

Ejemplos de reset CSS:
- [Meyer web] (https://meyerweb.com/eric/tools/css/reset/)

- [Eduardo Fierro] (https://raw.githubusercontent.com/eduardofierropro/Reset-CSS/refs/heads/main/css/app.css)

- [top 10] (https://cssauthor.com/css-reset-stylesheets/)

``` css
/* Reset Minimo */
/* El * incluye a todos los elementos de mi web */
*{

    margin:0;
    padding:0;
    box-sizing:border-box;

}

```

# mini - actividad
1. Crear una pagina con 2 cajas que contenga parrafos y con la clase ".caja"

2. Agregar estilos a tus cajas para visualizar bordes, margenes y padding

3. A la segunda caja, agregarle la clase ".alternativa"

4. A la clase alternativa agregar el estilo box.sizing: border-box y comparar la diferencia.

5. Buscar en internet alguna hoja de reset, e implementar en la web. 