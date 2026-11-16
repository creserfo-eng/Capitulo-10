function iniciar(){const a=[1,2,3,4,5];imprimirArreglo("Arreglo original: ",a,document.getElementById("arregloOriginal"));modificarArreglo(a);imprimirArreglo("Arreglo modificado: ",a,document.getElementById("arregloModificado"));document.getElementById("elementoOriginal").innerHTML=`a[3] antes de modificarElemento: ${a[3]}`;modificarElemento(a[3]);document.getElementById("elementoModificado").innerHTML=`a[3] después de modificarElemento: ${a[3]}`;}
function imprimirArreglo(encabezado,arreglo,salida){salida.innerHTML=encabezado+arreglo.join(" ");}
function modificarArreglo(elArreglo){for(const j in elArreglo)elArreglo[j]*=2;}
function modificarElemento(e){e*=2;document.getElementById("enModificarElemento").innerHTML=`Valor en modificarElemento: ${e}`;}
window.addEventListener("load",iniciar);
