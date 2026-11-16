let imgIcono;const imagenes=["ECP","TPE","BPP","GUI","REND","PORT","OIS"];const descripciones=["Error común de programación","Tip para prevenir errores","Buena práctica de programación","Observación de apariencia visual","Tip de rendimiento","Tip de portabilidad","Observación de ingeniería de software"];
function elegirImagen(){const indice=Math.floor(Math.random()*imagenes.length);imgIcono.src=imagenes[indice]+".svg";imgIcono.alt=descripciones[indice];}
function iniciar(){imgIcono=document.getElementById("imagen");imgIcono.addEventListener("click",elegirImagen);}
window.addEventListener("load",iniciar);
