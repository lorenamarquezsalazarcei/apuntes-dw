## Variable Referenciales vs Primitivas

Primitivo es la cubeta donde guardamos algún dato. `Strings, Numeros, booleanos`, y otros ... estas pueden ser `let` o `const`
Referencial es la llave del cmión (no el camión), donde guardamos muchos datos. `Objetos o Arrays, Funciones`. EStos son siempre `const`

```js
const num=35;
num=30; //Error no se puede modigicar una constante


const alumnos=["juan", "maria", "pedro"];
alumnos[0]= "Tomás";
```

## Comentarios en JS
- Comentario simple se utiliza //
- Comentario simple en línea: puede usarse // al final de la línea
- Comentario en BLoque /*.....*/ para hacer comentarios de múltiples líneas.
- Comentario de Documentación: Se utiliza /** .......*/ para iniciar un bloque informativo. SE usa mucho para funciones. 

```js
// 1 sola línea
let nombre="Juan"; // 1 sola línea al final 

/*
soy un comentario
multilinea
*/
/**
 * Esta es una función que suma 2 números
 * 
 * 
 * @param {number} num1 - El primer número
 * @param {number} num2 - El segundo número
 * @return {number} La suma de num1 y num2
 * 
 *  */

function sumar (num1,num2){
    retun num1+1num2
}
```

# Operadores aritméticos

Tenemos operadores de asignación, comparación, lógicos.
los aritméticos más comunes son: 
- Suma "+": suma 2 valores
- Resta ""-": resta 2 valores
- Incrementar un valor "++": Incrementar el valor de una variable
- Decrementar un valor "--": De crementar el valor de una variable
- Multiplicación: "*"
- División "/"
- Módulo "%": El resto de la división de 2 valores. 

```js
let a= 10;
let b= 5;

let suma = a+b; //15
let resta = a-b; //5
let multi = a*b; //50
let divi = a/b; //2
let modulo= ; a%b //0
let incrementoParaA= a++; //11
let decrementoParaB= b--; //4

//Simbolos comparativos
=== //si son iguales estrictamente (el mismo valor Y el mismo tipo)
!== // si no son estrictamente iguales
== //para ver si son iguales
!= //para ver si son distintos
< // para ver si es menor
> // para ver si es mayor
<= // para ver si es menor o igual que...
>=// para ver si es mayor o igual que...
if (a == b){


}else {

}
```