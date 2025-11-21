
var fullGaleriaCaja = document.getElementById("fullGaleriaCaja");
var fullGaleria = document.getElementById("fullGaleria");

function abrirFullGaleria(index){
        const cambioGaleria = [
                "img/miarte/01.jpg",
                "img/miarte/02.jpg",
                "img/miarte/03.jpg",
                "img/miarte/04.jpg",
                "img/miarte/05.jpg",
                "img/miarte/06.jpg",
                "img/miarte/07.jpg",
                "img/miarte/08.jpg",
                "img/miarte/09.jpg",
        ];
        fullGaleriaCaja.style.display = "flex";
        fullGaleria.src = cambioGaleria[index];
}
function cerrarFullGaleria(){
        fullGaleriaCaja.style.display = "none";
}