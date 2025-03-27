# Manipulación de Textos
1. Concetanación

```js
const nombre="Lucia";
const apellido="Perez";

const nombreCompleto= nombre + apellido; //"Lucía Perez"
const fullName = apellido+ " , " nombre; //Perez, Lucía
   


//concatenar usando +=
let saludo="Hola, ";
saludo += "¿Cómo estas?";

//saludo =saludo + "¿Cómo estás?";
console.log (saludo); //Hola, ¿Cómo estas?
```

2. Interpolación

Cuando usamos plantillas literalres (template lietarals/ template Strings), se pueden insertar variables o expresiones dentro de una cadena de texto usando `${}`

```js
let nombre="Ana";
let edad="25";

//Itnerpolación
let mensaje=`Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
//concatenación
let mensaje="Hola, mi nombre es"+nombre+"y tengo"+edad+"años.";

//insertar expresión

const total=50;
const iva=0.21;
console.log(`El total con impuesto es ${total +(total*iva)}`);

 //con interpolación ejemplo anterior
    const FullName=`${apellido}, ${nombre}`;//Perez, Lucía

```
3. Métodos de Strings
JS nos ofrece multiples métodos/funciones para manipular cadenas de texto.

- `toUpperCase()` y `toLowerCase()`
Comvierte todas las letras de una caadena en mayúsculas o minúsiulas.
- `split()`
Divide una cadena de texto en una lista/array basada en el separador elegido.

- `slice()`
Extraer una porción de la cadena basada en índices de inicio y fin (sin incluir el indice final)

- `replace()`y `replaceAll()`
Reemplaza una parte de la cadena por otra (la primera ocurrencia). Soporta expresion regulares (regex) para potenciar la búsqueda. 

- `trim()`
Elimina todos los espacios e blanco al inicio y al fin de la cadena.

- `includes()`
Verifica si una cadena contiene una subcadena específica

- `startsWith() y endsWith()`
Verifica si una cadena comienza o termina con una subcadena específica.

- `repeat()`
Repite una cadena un número específico de veces.

```js
let texto ="me encanta Javascipt";
//toUpperCase(), toLowerCase()
console.log(texto.toLowerCase());// me encanta javascript
console log (texto.toUperCase());//ME ENCANTA JAVASCRIPT

//Split
const palabras=texto.split("");
console.log(palabras); //["Me","encanta", "Javascript"]

const palabras2=texto.split("encanta");
console.log(palabras2);

const email="maria@alumnos.cei.es"
const separación=email.split("@")
console.log(separacion);//["maria", "alumnos.cei.es"]

//slice

let frase="Aprender javascript es divertido";
console.log("Parte de la frase:",frase.slice(9,19)); //javascript
cosole.log("Desde el indice 9 al final:", frase.slice(9)); //javascript es divertido


//Replace
let frase="Hola mundo. hola hola hola hola universo";

console.log("Reemplazar 'hola' por 'Hola': ", frase.replace("hola", "Hola")); //cambia la primera que encuentre. 

console.log("Reemplazar 'hola' por 'Hola': ", frase.replaceAll("hola", "Hola")); //Hola mundo. Hola Hola Hola Hola universo"


//Trim()
let frase="    Hola mi nombre es     Luka     ";
console.log(frase.trim()); //Hola mi nombre es    Luka;

//includes

let frase="El sol brilla en el cielo";
console.log("Contiene'sol'?"+ frase.icludes("sol")); //true
console.log("Contiene 'luna'?") + frase.includes("luna");//false

//startWith y endsWith
let frase="JAvascript es genial";
console.log("¿Empueza con 'Java':", frase.startWith("Java")); //True
console.log("¿Empueza con 'java':", frase.startWith("java")); //False

console.log(`¿Termina con "genial":`, frase.endstWith("genial")); //True

//repeat
let risa="Ja";
console.log("Me hace mucha gracia:", risa.repeat(3)); //JaJaJa

let frase="HolaComo Andan?";
console.log(frase.lenght); //15

```
Podemos combinar los métodos 

```js
let frase="    No me gusta Javascript en diseño web      ";
//ME ENCANTA JAVASCRIPT EN DISEÑO WEB
//Usar el trim(), toUpperCase(), replace()

let resultado = frase.replace("no me gusta", "me encanta").trim().toUppercase()
                    
