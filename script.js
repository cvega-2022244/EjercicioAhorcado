const palabras = ['javascript', 'html', 'css', 'programacion'];
let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
let palabraAdivinada = Array(palabraSeleccionada.length).fill('_');
let intentos = 0;
const maxIntentos = 6;

const displayPalabra = document.getElementById('word-display');
const mensajeDisplay = document.getElementById('message');
const inputLetra = document.getElementById('letter-input');

function actualizarDisplayPalabra() {
    displayPalabra.textContent = palabraAdivinada.join(' ');
}

function adivinarLetra(letra) {
    letra = letra.toLowerCase();

    if (palabraAdivinada.includes(letra)) {
        mensajeDisplay.textContent = 'Ya has intentado esa letra.';
        return;
    }

    if (palabraSeleccionada.includes(letra)) {
        palabraSeleccionada.split('').forEach((char, index) => {
            if (char === letra) {
                palabraAdivinada[index] = letra;
            }
        });
        actualizarDisplayPalabra();
        checkGanar();
    } else {
        intentos++;
        actualizarMensaje();
        checkPerder();
    }
}

