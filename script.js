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

