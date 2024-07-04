// Función para validar el texto mientras el usuario lo ingresa
function validateInput(event) {
    const input = event.target.value;
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios

    if (!regex.test(input)) {
        alert("El texto contiene caracteres no permitidos. Por favor, usa solo letras minúsculas sin acentos.");
        event.target.value = input.replace(/[^a-z\s]/g, ''); // Remover caracteres no permitidos
    }
}

// Función de encriptación
function encryptText() {
    const input = document.getElementById("inputText").value;
    const encrypted = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").innerText = encrypted;
    document.getElementById("placeholder").style.display = "none";
}

// Función de desencriptación
function decryptText() {
    const input = document.getElementById("inputText").value;
    const decrypted = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").innerText = decrypted;
    document.getElementById("placeholder").style.display = "none";
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    const outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    }, (err) => {
        alert("Error al copiar el texto: ", err);
    });
}

document.getElementById("inputText").addEventListener("input", validateInput);
document.getElementById("encryptButton").addEventListener("click", encryptText);
document.getElementById("decryptButton").addEventListener("click", decryptText);
document.getElementById("copyButton").addEventListener("click", copyToClipboard);
