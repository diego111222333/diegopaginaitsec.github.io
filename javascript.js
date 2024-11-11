function tema(){
    document.body.classList.toggle("dark-theme");
}
function envio(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Su mensaje fue enviado. Pronto le responderemos a su correo. Gracias por haberse contactado con nosotros');
        enviar.textContent=`Su mensaje fue enviado. Pronto le responderemos a su correo`
     });
}