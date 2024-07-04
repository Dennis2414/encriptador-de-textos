function encriptar(texto) {
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptar(texto) {
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}

// script.js
function encriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value;
    let resultado = encriptar(inputTexto);
    let outputTexto = document.getElementById("outputTexto");
    outputTexto.value = resultado;
    togglePlaceholder(outputTexto);
}

function desencriptarTexto() {
    let inputTexto = document.getElementById("inputTexto").value;
    let resultado = desencriptar(inputTexto);
    let outputTexto = document.getElementById("outputTexto");
    outputTexto.value = resultado;
    togglePlaceholder(outputTexto);
}

function encriptar(texto) {
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptar(texto) {
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("outputTexto");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function togglePlaceholder(outputTextarea) {
    let placeholder = document.querySelector('.placeholder');
    if (outputTextarea.value === "") {
        placeholder.style.display = 'block';
    } else {
        placeholder.style.display = 'none';
    }
}
