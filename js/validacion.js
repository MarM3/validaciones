var estado = false;
const envio = document.getElementById("form");
envio.onsubmit = validar;

function validar(){
    validarTelefono();
    validarFecha();
    validarCP();
    validarEmail();
    validarDNI();
}

function validarTelefono(){
    let telefono = document.getElementById("campoTelefono").value;
    const patron = /^\d{9}$/;

    if (telefono.length === 0 || !patron.test(telefono)){
        estado = false;
        console.log(estado);
        alert("El teléfono introducido no es correcto. Deben ser 9 digitos, sin letras.");
    }
    estado = true;
    console.log(estado);
}

function validarFecha(){
    let fecha = document.getElementById("campoFecha").value;
    const patron = /^\d{2}[./-]\d{2}[./-]\d{4}$/; ///^\d{2}\/\d{2}\/\d{4}$/ sólo admite la barra para separar, sino permito el punto, la barra y el guión

    if (!patron.test(fecha)){
        estado = false;
        console.log(estado);
        alert("La fecha introducida no es correcta.");
    }
    estado = true;
    console.log(estado);
}

function validarCP() {
    let cp = document.getElementById("campoCP").value;
    const patron = /^\d{5}$/;

    if (!patron.test(cp)){
        estado = false;
        console.log(estado);
        alert("El código postal introducido no es correcto. Introduzca 5 digitos numéricos.");
    }
    estado = true;
    console.log(estado);
}

function validarEmail(){
    let email = document.getElementById("campoEmail").value;
    const patron = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!patron.test(email)){
        estado = false;
        console.log(estado);
        alert("El e-mail introducido no es correcto.");
    }
    estado = true;
    console.log(estado);
}

function validarDNI(){
    let dni = document.getElementById("campoDNI").value;
    let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    const patron = /^\d{8}[A-Z]$/;

    if (dni.length === 0 || !patron.test(dni) || (dni.charAt(8)!=letras[(dni.substring(0, 8))%23])){
        estado = false;
        console.log(estado);
        alert("El DNI introducido no es correcto. Deben ser 8 dígitos numéricos y una letra en mayúscula.");
    }
    estado = true;
    console.log(estado);
}