# JavaScript

Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Lo usamos para crear contenido dinámico e interactivo en sitios web.

Alto nivel: Está diseñado para ser fácil de leer y escribir por humanos. 
interpretado: se ejecuta en tiempo real, linea por linea y NO necesita ser compilado.


```js
let numero = 1;
console.log("Linea 1 y número vale:", numero); //Imprime en consola el texto Línea 1 y numero vale: 1
numero = numero + 2;
console.log("Linea 2 y número vale:", numero);
// impirme el consola el texto Linea 2 y número vale:3

```

Orientado a Objetos:
Js utiliza un paradigma (OOP), organiza su código en "objetos". Un objeto es una colección de `propiedades`(características) y `métodos`(funciones) que se pueden leer y manipular.

Perro:
//Propiedades
- color:blanco y negro
- Nombre: Lasie

//Métodos:
- ladran()
- moverLaCola()

```js
const alumno={
    nombre:"Lucía Perez",
    edad:35,
    saludar: function(){
        console.log("hola, mi nombre es Lucía")
    }
}

// Para imprimir el nombre del alumno usamos algo como:
console.log(alumno.nombre);
console.log("Me llamo", alumno.nombre, "y tengo", alumno.edad, "años");

alumno.saludar();
```

## Dónde podemos probar/codificar con JS
- En el navegador: En la pestaña consola
- En etiquetas de `<script>` dentro del HTML, y se suelen poner al final antes de cerrar el body
- Se pueden usar archivos externos con la extensión`.js` linkeado en nuestro html: <script src="./js/miscript.js"></script>
- Usar extensión de VSC-> Quokka. Para empezar usar: "Command+P" ">Quokka"
- Usar en páginas externas: 
    - https://playcode.io/new
    - https://codepen.io
    - https://jsfiddle.net

## Funcionalidades

- Manipulación del DOM: agregar, modificar o quitar elementos HTML y CSS
- Procesar Formularios: Verificar datos ingresados por el usuario, y realizar formularios complejos de multiples secciones.
- Manejo de animaciones: Manipular efectos visuales y animaciones en nuestra web.
- Manejo de Eventos: Responder a las acciones del usuario, como por ej: hacerl click, mover el mouse, desplazarse por la web...
- Comunicación asíncrona con servidores mediante AJAX/Fetch: enviar y recibir datos de un servidor sin tener que recargar la página. 

## Tipos de Datos

- Números: enteros, decimales, positivos, negativos, etc.
- Cadenas de Textos (strings): textos, palabras, frases, 1 letra. Entre comillas 'simples', "dobles", `backticks`.
- Booleanos: Verdadero o FAlso
- Listas de cosas (arrays): Se escriben con corchetes[] y los items se separan con coma.
- Objetos (object): Coleccion de propiedades y métodos y se escriben con {} 

```js
// PRIMITIVOS
let texto="Hola Alumnos de CEI";
let textoConComillas='Hola esoy muy "bien"';
let textoConComillasDobles ="I'm Tomi";
let texto= `Quiero comillas'simples' y "dobles"`; //template string (plantilla)

let numero=113;
let numero2="123";
numero2 = Number(numero2);
// REFERENCIALES


// objeto
const alumno= {
    nombre:"Mario",
    edad 33,
    isRecibido:false,
    presentarProyecto: function()=> {
        isRecibido= true;
        edad=34;
    }
}

alumno.edad;
alumno.presentarProyecto();

// Como escribir en un objeto
alumno.edad=37;

// Listas o Arrays

const alumnosDeDW:["Jhon", "María", "Sonia", "Gurutze",...];
const edades =[25, 32, 18, 49];
consr listaMixta =[
                    1,
                    "Juan",
                    true,
                    {val1:"hola", val2:"chau"}
                ];
console.log(alumnosDeDW[0])//Jhon
console.log(alumnosDeDW[1])//María

//Para escribir un valor en una lista
alumnosDeDW[0] = "Jhon"
console.log(alumnosDeDW[0])
```