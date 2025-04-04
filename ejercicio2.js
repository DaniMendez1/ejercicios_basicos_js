// 2.1 La edad de Luke
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;

console.log({jedi});

// 2.2 
const nombre = "Leia";
const apellido = "Oegana";
const edad = 20;

console.log("Hola soy " + nombre +" "+ apellido + " tengo "+ edad + " años y soy una princesa de Alderan.");

//2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
const suma = sable1.precio + sable2.precio;

console.log("El precio de los dos sables es de "+suma);

//2.4
let precioBaseGlobal = 10000;
//Cambio el precio global
precioBaseGlobal = 250000;
console.log("Precio global de las naves: "+precioBaseGlobal);


const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("El precio final de la nave "+ nave1.nombre +" es "+ nave1.precioFinal);
console.log("El precio final del "+ nave2.nombre +" es "+ nave2.precioFinal);