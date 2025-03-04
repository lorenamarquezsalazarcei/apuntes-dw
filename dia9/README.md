Investigar los sigueinte types, explicar que hacen y crear un ejemplo en `otros-input.html`
- Number: Permite ingresar solo valores numéricos.

- Color: Muestra un selector de color para elegir un valor hexadecimal.

- Date: Proporciona un selector de fecha para elegir un día específico.

- File: Permite cargar archivos desde el sistema del usuario.

- Reset: Botón para restablecer los valores del formulario.

- Hidden: Campo oculto que no es visible en la interfaz, pero envía datos en el formulario.

- Range:Permite seleccionar un valor dentro de un rango definido mediante una barra deslizante


## Nombres de variables/selectores/archivos

- UPPERCASE
- lowecase
- Title Case
- camelCase: `miClaseDeHtml`
- PascalCase:`MiClaseDeHtml`
- kebab-case: `mi-clase-de-html` (Se utiliza para nombrar archivos)
- snake_case: `mi_clase_de_html`

## Nomenclaruta BEM (Block-element-Modifier)

-[BEM](https://getbem.com/naming) 

## Para que se usa

1. Comunicar un proposito o función
2. comunicar la estructura del componente
3. MArca una especificidad baja consistente.

<style>
    .card{

    }

    .card__header{

    }

    .card__content{

    }

    .card__footer{

    }


</style>

<div class="card"> 
    <div class="card__header"> Cabecera de la Tarjeta </div>
    <div class="card__content"> contenido </div>
    <div class="card__footer"> Footer </div>

</div>

<div class="sidebar">
    <h1 class="sidebar__title">título </h1>
    <ul class="sidebar__nav-list">
        <li class="sidebar__nav-item">
            <a class="sidebar__link"href="#">Home </a>
        </li>
        <li>
            <a href="#">Contacto </a>
        </li>
        <li>
            <a href="#">Acerca de nosotros </a>
        </li>
    </ul>
</div>

<div class="sidebar">
    <h1 class="sidebar__title">título </h1>
    <ul class="lista">
        <li class="lista__item">
            <a class="sidebar__link"href="#">Home </a>
        </li>
        <li>
            <a href="#">Contacto </a>
        </li>
        <li>
            <a href="#">Acerca de nosotros </a>
        </li>
    </ul>
</div>

<div class="card"> 
    <div class="card__header"> Cabecera de la Tarjeta </div>
    <div class="card__content"> contenido </div>
    <div class="card__footer"> Footer </div>

</div>
<div class="card card--navidad"> 
    <div class="card__header"> Cabecera de la Tarjeta </div>
    <div class="card__content"> contenido </div>
    <div class="card__footer"> Footer </div>

</div>
<div class="card"> 
    <div class="card__header cardheader--xmas"> Cabecera de la Tarjeta </div>
    <div class="card__content"> contenido </div>
    <div class="card__footer"> Footer </div>

</div>

