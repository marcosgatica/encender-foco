
let btn = document.getElementById("btn");
let foco = document.getElementById("foco");
let texto = document.getElementById("titulo");
let bgcolor = document.getElementsByClassName("cuerpo")

btn.onclick = function() {
    foco.src = "IMAGENES/FOCOEncendido.jpg";
    texto.innerHTML = "Felicidades, le prendiste el foco"; 
    bgcolor.style.background = "yellow";
}

