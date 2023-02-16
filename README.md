<p align='left'>
  <img src="https://www.frba.utn.edu.ar/wp-content/uploads/2019/10/logo-UTNBA-PNC-2016-2019-e1570223041254.png" />
</P>

---

# `Conociendo al objeto Math`

---

<a id="top"></a>

## `Bloques temáticos:`

- [**Objeto Math**](#item1)
- [**Math.PI**](#item2)
- [**Math.pow**](#item3)
- [**Math.max**](#item4)
- [**Math.min**](#item5)
- [**Math.sqrt**](#item6)
- [**Math.trunc**](#item7)
- [**Math.ceil**](#item8)
- [**Math.floor**](#item9)
- [**Math.round**](#item10)
- [**Math.random**](#item11)

---

---

En esta oportunidad, voy a compartir algunos métodos de Math. Es una lectura de no más de 10 minutos. Conocer estos les va a servir para tenerlos en cuenta en algunos desafíos.

<a id="item1"></a>

## `Objeto Math`

Math es uno de los objetos globales u objeto incorporado estándar de JavaScript y puede ser utilizado en cualquier lugar donde puedas usar JavaScript. Contiene constantes útiles como `π` y el número de `Euler`, además de funciones como **floor()**, **round()** y **ceil()**.

En este artículo, veremos ejemplos de muchas de esas funciones. Pero primero, aprendamos más sobre el objeto **Math**.

<a id="item2"></a>

### `Math.PI`

**Math.PI** es una propiedad estática del objeto Math y corresponde al número Pi, que se define como la relación entre la longitud de la circunferencia de un círculo respecto a su diámetro. El número Pi es aproximadamente 3.14159 y se representa comúnmente con la letra griega `π`.

Ejemplo:

```js
Math.PI; // 3.141592653589793
```

<a id="item3"></a>

### `Math.pow`

**Math.pow()** recibe dos parámetros, una base y un exponente. El segundo parámetro que es el exponente será utilizado para elevar la base que es el primer parámetro que le pasamos.

Puesto que pow() es un método estático de Math, siempre se utiliza como Math.pow(). Si la base es negativa y el exponente no es un número entero, el resultado será NaN.

**Sintaxis**

```js
Math.pow(base, exponente);
```

**Ejemplos**

```js
// simple
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024
// exponentes fraccionales
Math.pow(4, 0.5); // 2 (raíz cuadrada de 4)
Math.pow(8, 1 / 3); // 2 (raíz cúbica de 8)
Math.pow(2, 0.5); // 1.412135623730951 (raíz cuadrada de 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (raíz cúbica de 2)
// exponentes con signo
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5
// bases con signo
Math.pow(-7, 2); // 49 (los cuadrados son positivos)
Math.pow(-7, 3); // -343 (El cubo de una base negativa puede ser negativo)
Math.pow(-7, 0.5); // NaN (Los números negativos no tienen raíz cuadrada real)
Math.pow(-7, 1 / 3); // NaN
```

El siguiente ejemplo muestra como usar el objeto Math para escribir una función que calcula el área de un circulo:

```javascript
function calcularAreaDeCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

calcularAreaDeCirculo(1); // 3.141592653589793
```

<a id="item4"></a>

### `Math.max`

**Math.max()** es una función que devuelve el valor mayor de una lista de valores numéricos pasados como parámetros. Si se pasa un valor no numérico como parámetro, **Math.max()** devolverá **NaN**.

Un arreglo de valores numéricos puede ser pasado como un solo parámetro a **Math.max()** usando **spread (...)** o **apply**. Sin embargo, cualquiera de estos métodos puede fallar cuando la cantidad de números en el arreglo es muy grande.

Números como parámetros:

```js
Math.max(4, 13, 27, 0, -5); // devuelve 27
```

Parámetro inválido:

```js
Math.max(4, 13, 27, "ocho", -5); // devuelve NaN
```

Arreglo como parámetro, usando Spread(...):

```js
let numeros = [4, 13, 27, 0, -5];

Math.max(...numeros); // devuelve 27
```

Arreglo como parámetro, usando .aplly();

```js
let numeros = [4, 13, 27, 0, -5];

Math.max.apply(null, numeros); // devuelve 27
```

<a id="item5"></a>

### `Math.min`

La función **Math.min()** devuelve el menor valor de cero o más números.

Le puedes pasar cualquier cantidad de argumentos.

**Ejemplo**

```js
Math.min(7, 2, 9, -6);
// devuelve -6
```

<a id="item6"></a>

### `Math.sqrt`

La función **Math.sqrt()** devuelve la raíz cuadrada de un número.

Si se ingresa un número negativo, te devuelve NaN.

sqrt() es un método estático de Math, por lo tanto, siempre es llamado como **Math.sqrt()** en vez de un método en otro objeto.

**Sintaxis**

Math.sqrt(x), donde x es un número.

**Ejemplos**

```js
Math.sqrt(25); // 5
Math.sqrt(169); // 13
Math.sqrt(3); // 1.732050807568
Math.sqrt(1); // 1
Math.sqrt(-5); // NaN
```

<a id="item7"></a>

### `Math.trunc`

**Math.trunc()** es un método del objeto estándar Math que devuelve sólo la parte entera de un número dado, simplemente quitando las unidades fraccionarias. Esto resulta en hacer un redondeo de la parte decimal a 0. Cualquier valor ingresado que no sea un número devolverá como resultado NaN.

Cuidado: este método es una característica de ECMAScript 2015 (ES6) y no tiene soporte en los navegadores antiguos.

**Ejemplos**

```js
Math.trunc(0.1); //  0
Math.trunc(1.3); //  1
Math.trunc(-0.9); // -0
Math.trunc(-1.5); // -1
Math.trunc("foo"); // NaN
```

<a id="item8"></a>

### `Math.ceil`

**Math.ceil()** es un método del objeto estándar Math que redondea un número dado hacia el siguiente número entero. Toma nota que para los números negativos, esto significa que el número será redondeado "hacia 0" en vez de el número de mayor valor absoluto (ve los ejemplos a continuación).

**Ejemplos**

```js
Math.ceil(0.1); //  1
Math.ceil(1.3); //  2
Math.ceil(-0.9); // -0
Math.ceil(-1.5); // -1
```

<a id="item9"></a>

### `Math.floor`

**Math.floor()** es un método del objeto estándar Math que redondea un número dado hacia el número entero anterior. Toma nota que para los números negativos esto significa que el número será redondeado "lejos de 0" en vez de el número de menor valor absoluto debido a que **Math.floor()** devuelve el número entero que sea menor o igual al número dado.

**Ejemplos**

```js
Math.floor(0.9); //  0
Math.floor(1.3); //  1
Math.floor(0.5); //  0
Math.floor(-0.9); // -1
Math.floor(-1.3); // -2
```

<a id="item10"></a>

### `Math.round`

**Math.round()** es un método del objeto estándar Math que redondea un número dado hacia el número entero más cercano.

**Ejemplos**

```js
Math.round(0.9); //  1
Math.round(0.3); //  0
Math.round(0.5); //  1
Math.round(-0.9); // -1
Math.round(-0.3); // -0
```

<a id="item11"></a>

### `Math.random`

La función **Math.random()** devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados. La implementación selecciona la semilla inicial del algoritmo de generación de números aleatorios, no pudiendo ser esta elegida o restablecida por el usuario.

**Sintaxis**

```js
Math.random();
```

Para obtener un número aleatorio entre un rango mayor, multiplique el resultado de **Math.random()** por un número. Esto es porque por lo general va a necesitar números más grandes que 0 y 1.

Por ejemplo, si desea un número de punto flotante aleatorio entre 0 y 10, puede usar:

```js
var x = Math.random() * 10;

console.log(x);
// 4.133793901445541
```

Si necesita un número de punto flotante aleatorio que se encuentre entre dos números específicos, puede hacer algo como esto:

```js
var min = 83.1;
var max = 193.36;

var x = Math.random() * (max - min) + min;

console.log(x);
// 126.94014012699063
```

A menudo necesitas números enteros. Para hacer esto, tendrá que usar algunos otros métodos del objeto Math, **Math.floor()** (redondea hacia abajo al entero más cercano) y **Math.ceil()** (redondea hacia arriba al entero más cercano).

**Ejemplo**

```js
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Devuelve: 0, 1 o 2

console.log(getRandomInt(1));
// Devuelve: 0

console.log(Math.random());
// Devuelve un número aleatorio, ej: 0.880485422464647858
```

(Recuerda que Math.random() nunca devolverá exactamente 1, por lo que Math.random()\*10 nunca devolverá exactamente 10. Esto significa que después de redondear hacia abajo, el resultado siempre será 9 o menos).

Si necesita un número aleatorio con el número mínimo de 1 (por ejemplo, eligiendo un día al azar en enero), puede utilizar el método Math.ceil().

```js
var x = Math.ceil(Math.random() * 31);

console.log(x);
// 23
```

Otra forma habría sido usar la función anterior (usando Math.floor()) y agregarle 1:

```js
var x = Math.floor(Math.random() * 31) + 1;

console.log(x);
// 17
```

Por último, ocasionalmente necesitas un número entero aleatorio entre dos números enteros específicos. Por ejemplo, si está tratando de elegir boletos de rifa y conoce los números del número más bajo y más grande:

```js
var min = 1718;
var max = 3429;

var x = Math.floor(Math.random() * (max - min + 1) + min);

console.log(x);
//2509
```

---

---

Con este material podemos pasar a hacer un breve ejercicio donde podrás poner en práctica todo lo aprendido.

Dirigirse a la carpeta "homework" y realizar las consignas del archivo "homework.js"

<br><br>

créditos:<br>
<https://www.freecodecamp.org/>
<https://developer.mozilla.org/es/>

[Subir al índice](#top)
