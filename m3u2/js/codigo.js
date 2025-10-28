// EJERCICIO 1
const producto = "Laptop";
const precio = 1999.99;
const disponible = true;
console.log("EJERCICIO 1:");
console.log(`El producto ${producto} tiene un precio de $${precio} y su disponibilidad es ${disponible}`);

// EJERCICIO 2
const metros = 6999;
let medio_transporte = "";

if (metros <= 1000) {
  medio_transporte = "Pie";
} else if (metros > 1000 && metros <= 10000) {
  medio_transporte = "Bicicleta";
} else if (metros > 10000 && metros <= 30000) {
  medio_transporte = "Colectivo";
} else if (metros > 30000 && metros <= 100000) {
  medio_transporte = "Auto";
} else {
  medio_transporte = "Avión";
}
console.log("EJERCICIO 2:");
console.log(`El medio de transporte que conviene utilizar es: ${medio_transporte}`);

// EJERCICIO 3
const productos = ["arroz", "fideos", "aceite", "sal", "azúcar", "yerba", "café", "té", "galletitas", "harina"];
console.log("EJERCICIO 3:");
for (let i = 0; i < productos.length; i++) {
  console.log(`¡No te olvides de comprar ${productos[i]}!`);
}

// EJERCICIO 4
let mayor = 0;
const numeros = [5, 12, 8, 20, 7, 3, 15, 30, 2, 10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}
console.log("EJERCICIO 4:");
console.log(`El número mayor es: ${mayor}`);
