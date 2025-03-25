# Forma de escribir funciones

```js
//Esta función tiene 2 parametros y devuelve la suma de ambos
function sumar (num1, num2){
    return num1+num2;
}

//función sin nombrar
const sumar = function(num1, num2){
    return num1+num2;
}

//función flecha
const sumar =()=> {
    return num1+num2;
}
        //Ejemplo
        miBoton.addEventListener("click", (=>){
            console.log("Me hicieron click");
        })

//funcion fleca reducida
const sumar =(num1, num2)=> num1+num2; //solo se puede usar si mi función tiene una sola fila 


```

## Truthy / Falsy
En JS podemos tner un valor Truthy o Falsy. Un valor Truthy es aquel que se evalúa como verdadero en un contexto booleano, mietras que falsy se evalua como falso.
Podemos utiliar este concepto para la toma de decisiones en nuestro códico. 
Valores falsy:`undefined, null, NaN, 0, "", false``
Valores truthy: todos los demas.
Ejemplo de valores que parecen falsy, pero que son truthy:
```js
const val="false";
const val=-1
const val=" ";
const val=0.1;
const val ="0";
const val ="nul";
const val = "undefined";
```

```js
edad=19;
if(edad>18){
    //truthy

} else{
    //false
}

let numero =16;
if(numero%2 ==0){
    //truthy: es par

}else{
    //falsy:es impar
}

if(""){
    console.log("no me ejecutan nunca");
}else{
    console.log("Si se Ejecuta!");
}
```