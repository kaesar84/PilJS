// Definir el array
const miArray = [
  "../../media/animal1.jpg ",
  "../../media/animal2.jpg ",
  "../../media/animal3.jpg ",
  "../../media/montain1.jpg",
  "../../media/montain2.jpg",
  "../../media/montain3.jpg",
];
let indice = 0; // Variable para mantener el índice del valor a mostrar

// Obtener los botones y el div de resultado
const btnRetroceder = document.getElementById("retrocederBtn");
const btnAvanzar = document.getElementById("avanzarBtn");
const divResultado = document.getElementById("resultado");

// Función para mostrar el valor actual
function mostrarValorActual() {
  if (divResultado.firstChild) {
    divResultado.removeChild(divResultado.firstChild);
  }

  const imagen = document.createElement("img");
  imagen.src = miArray[indice];
  console.log(imagen);

  divResultado.appendChild(imagen);
  // divResultado.textContent = miArray[indice];
}

// Función para avanzar al siguiente valor del array
function avanzar() {
  if (indice < miArray.length - 1) {
    indice++; // Incrementar el índice si no hemos llegado al final del array
  } else {
    indice = 0; // Reiniciar el índice al principio del array si ya hemos llegado al final
  }
  mostrarValorActual();
}

// Función para retroceder al valor anterior del array
function retroceder() {
  if (indice > 0) {
    indice--; // Decrementar el índice si no estamos en el primer elemento del array
  } else {
    indice = miArray.length - 1; // Ir al último elemento del array si estamos en el primero
  }
  mostrarValorActual();
}

// Agregar eventos click a los botones
btnRetroceder.addEventListener("click", retroceder);
btnAvanzar.addEventListener("click", avanzar);

// Mostrar el valor inicial al cargar la página
mostrarValorActual();
