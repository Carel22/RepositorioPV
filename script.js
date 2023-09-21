function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    opciones[5].className="";
    opciones[6].className="";
    link.className="seleccionado";
    //desaparece el menu un vez que se haya seleccionado n item en modo responsive
    var x=document.getElementById("nav");
    x.className="";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className === "") {
        x.className ="responsive";
    }
    else{
        x.className = "";
    }
}
//scrolling para aplicar la animacion de las barras de habildades
window.onscroll = function(){
    efectoHabilidades()
};
//funcion q aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300)
    {
        document.getElementById("uno").classList.add("barra-progreso1");
        document.getElementById("dos").classList.add("barra-progreso2");
        document.getElementById("tres").classList.add("barra-progreso3");
    }
}
//finLOGIN

const formulario = document.getElementById('registroForm');
const passwordInput = document.getElementById('password');
const customAlert = document.getElementById('customAlert');
const customAlertMessage = document.getElementById('customAlertMessage');

formulario.addEventListener('submit', function (event) {
    const password = passwordInput.value;
    if (!validatePassword(password)) {
        showCustomAlert('Ingresa una contraseña mas segura.');
        event.preventDefault();
    } else {
        showCustomAlert('Registrado con éxito.');
    }
});

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
}

function showCustomAlert(message) {
    customAlertMessage.textContent = message;
    customAlert.style.display = 'block';
}

// Cerrar la ventana emergente personalizada
customAlert.addEventListener('click', function () {
    customAlert.style.display = 'none';
});



// Función para mostrar el icono emergente después de un retraso
function mostrarIconoEmergente() {
    const iconoEmergente = document.getElementById('icono-emergente');
    iconoEmergente.style.display = 'block';
}

// Mostrar el icono emergente después de 3 segundos (puedes ajustar el tiempo)
setTimeout(mostrarIconoEmergente, 3000);
