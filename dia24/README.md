Actividad de JS
1. Variables y Tipos de Datos
Escribir un progrma que defina variables de diferentes tipos y las imprima en la consola.

```js
let numero =10;
let nombre="Lucía";
let esMAyorDeEdad =true;
let valorNulo=null;
let juan;
```

2. Operadores y expresiones
Escribir un programa que realice operaciones aritméticas y compare valores.
```js
let num1=10;
const num2=5;
const num3="5";

let suma =num1 + num2;
let resta =num1 - num2;
let multi =num1 * num2;
let divi =num1 / num2;
let esMayor =(num1 >num2);
console.log(esMayor);
let esIgual =(num3==num2);
let esEstrictamenteIgual = (num3===num2);

const edad=25; 
if (edad>=18){
    console.log("es mayor de edad");
}

```


# Bucles

## Ver números pares del 1 al 10

```js
for (leti=1; i<=11 ; i++){
    console.log("Numero:", i);
}

//Ejemplo de uso de While
// Bucle usando Mientras (While) en vez de for
let i=0;
while (i<10){
    //inicio del bucle
    console.log(i);
    //fin del bucle
    i++;
}
//Bucle Do - While, pero se ejecuta al menos una vez.
do{
    console.log(i);
    i++;

} while (1<10);


```