const frecuencia=[,0,0,0,0,0,0];let totalDados=0;const imagenesDado=[];
function iniciar(){const cont=document.getElementById("dados");for(let i=0;i<12;i++){const img=document.createElement("img");img.src="blanco.svg";img.alt=`Dado ${i+1}`;cont.appendChild(img);imagenesDado.push(img);}document.getElementById("botonTirar").addEventListener("click",tirarDados);}
function tirarDados(){for(let i=0;i<imagenesDado.length;i++){const cara=Math.floor(1+Math.random()*6);calcularTiros(cara);establecerImagen(i,cara);++totalDados;}actualizarTablaFrecuencias();}
function calcularTiros(cara){++frecuencia[cara];}
function establecerImagen(numeroDado,cara){imagenesDado[numeroDado].src=`dado${cara}.svg`;imagenesDado[numeroDado].alt=`Dado con ${cara} puntos`;}
function actualizarTablaFrecuencias(){let resultados='<table><caption>Frecuencias de tiro de dado</caption><thead><tr><th>Cara</th><th>Frecuencia</th><th>Porcentaje</th></tr></thead><tbody>';for(let i=1;i<frecuencia.length;i++)resultados+=`<tr><td>${i}</td><td>${frecuencia[i]}</td><td>${formatoPorciento(frecuencia[i]/totalDados)}%</td></tr>`;document.getElementById("divTablaFrecuencias").innerHTML=resultados+'</tbody></table>';}
function formatoPorciento(valor){return (valor*100).toFixed(2);}
window.addEventListener("load",iniciar);
