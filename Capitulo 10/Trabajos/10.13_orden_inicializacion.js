// Ejercicio 10.13
// El arreglo ventas tiene 3 filas y 5 columnas.
// El recorrido por filas (row-major) visita los elementos en este orden:
// ventas[0][0], ventas[0][1], ventas[0][2], ventas[0][3], ventas[0][4],
// ventas[1][0], ventas[1][1], ventas[1][2], ventas[1][3], ventas[1][4],
// ventas[2][0], ventas[2][1], ventas[2][2], ventas[2][3], ventas[2][4].

var ventas = Array.from({ length: 3 }, () => Array(5).fill(0));

for (var fila in ventas) {
  for (var columna in ventas[fila]) {
    ventas[fila][columna] = 0;
    console.log("Elemento inicializado:", `ventas[${fila}][${columna}]`);
  }
}
