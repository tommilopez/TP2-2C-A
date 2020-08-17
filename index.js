console.log('Hola mundo');

let var1 = 1;
let var2 = 0;
let var3 = -0;
let infinito = Infinity;

console.log(typeof Infinity);
console.log("1 / 0  = " + typeof (var1 / var2));
console.log("Raiz cuadrada (-1): " + Math.sqrt(-1));

//STRING

const foo = Symbol();
console.log(foo);

let nulo = null;
console.log(nulo);


let someNumber = 10;
let someString = "Ten";
let someBoolean = false;

let sumaNumeroyString = someNumber + someString;
let sumaBoolenayString = someBoolean + someString;
let sumaNumeroyBoolean = someNumber + someBoolean;

console.log("Suma de numero y string: " + sumaNumeroyString + typeof(sumaNumeroyString));
console.log("Suma de Boolean y String " + sumaBoolenayString + typeof(sumaBoolenayString));
console.log("Suma de numero y boolean " + sumaNumeroyBoolean + typeof(sumaNumeroyBoolean));

let a = 4, b = 6;
console.log(`La suma es:  ${ ()=> {return a + b} }`);

console.log(pizza);
let pizza = `Deep Dish 🍕`;
