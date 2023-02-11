let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Primeros Auxilios");
        habilidades[1].classList.add("Pediatria Preventiva");
        habilidades[2].classList.add("Diagnostico");
        habilidades[3].classList.add("Tratamientos");
        habilidades[4].classList.add("Emergencia");
        habilidades[5].classList.add("Comunicación");
        habilidades[6].classList.add("Trabajo en Equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("Dedicación");
        habilidades[9].classList.add("Proyecto Social");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 