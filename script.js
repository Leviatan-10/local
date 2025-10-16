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
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



/*function downloadCV() {
    // Aquí colocas la lógica para abrir el archivo CV en una nueva pestaña
    // Puedes simplemente redirigir al usuario a la URL del archivo CV
    window.open('https://sena.edu.co/es-co/formacion/sennova/Politica%20Investigacion.pdf'); // Cambia 'ruta/del/archivo/cv.pdf' por la URL de tu archivo CV
}*/

function downloadCV() {
    // Ruta completa del archivo PDF
    var url = 'pdf/HOJA DE VIDA.docx';

    // Crear un elemento de enlace temporal
    var link = document.createElement('a');
    link.href = url;

    // Especificar el nombre del archivo
    link.download = 'HOJA DE VIDA.docx';

    // Simular el clic en el enlace para iniciar la descarga
    link.click();
}
