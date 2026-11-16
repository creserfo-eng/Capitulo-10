function iniciar(){const arreglo1=[[1,2,3],[4,5,6]];const arreglo2=[[1,2],[3],[4,5,6]];imprimirArreglo("Valores en arreglo1 por fila",arreglo1,document.getElementById("salida1"));imprimirArreglo("Valores en arreglo2 por fila",arreglo2,document.getElementById("salida2"));}
function imprimirArreglo(encabezado,elArreglo,salida){let resultados="";for(const fila in elArreglo){resultados+="<ol>";for(const columna in elArreglo[fila])resultados+=`<li>${elArreglo[fila][columna]}</li>`;resultados+="</ol>";}salida.innerHTML=resultados;}
window.addEventListener("load",iniciar);
