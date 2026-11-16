// Ejercicio 10.8
// a) Mostrar el séptimo elemento (índice 6).
console.log(f[6]);

// b) Inicializar cinco elementos de g en 1.
var g = [1, 1, 1, 1, 1];

// c) Calcular el total de los 100 elementos de c.
var total = c.reduce((acumulado, valor) => acumulado + valor, 0);
console.log(total);

// d) Copiar los 11 elementos de a al inicio de b.
b.splice(0, 11, ...a);

// e) Encontrar e imprimir el menor y el mayor de w.
var menor = Math.min(...w);
var mayor = Math.max(...w);
console.log("Menor:", menor, "Mayor:", mayor);
