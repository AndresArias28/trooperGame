// Lista de palabras
const words = ['Amarillo', 'Azul', 'Naranja', 'Negro', 'Rojo', 'Verde', 'Purpura'];

// Lista de colores
const colors = ['yellow', 'blue', 'orange', 'black', 'red', 'green', 'purple'];

// Función para obtener un valor aleatorio de una lista
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generar una palabra aleatoria con color aleatorio
function generateColorWord() {
    const container = document.getElementById('contenedorPalabras');
    container.innerHTML = ''; // Limpiar el contenido anterior
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    const randomWord = getRandomElement(words);
    const randomColor = getRandomElement(colors);
    wordElement.textContent = randomWord;
    wordElement.style.color = randomColor;
    container.appendChild(wordElement);
}

// Generar palabras de colores cada 3 segundos
setInterval(generateColorWord, 3000);

// Generar la primera palabra al cargar la página
window.onload = generateColorWord;


  