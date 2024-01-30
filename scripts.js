// Listas de palabras

let animales = [
  "Leon",
  "Tigre",
  "Elefante",
  "Jirafa",
  "Cebra",
  "Oso",
  "Mono",
  "Koala",
  "Panda",
  "Lobo",
  "Zorro",
  "Ballena",
  "Delfin",
  "Aguila",
  "Buho",
  "Tortuga",
  "Cocodrilo",
  "Iguana",
  "Rinoceronte",
  "Hipopotamo",
  "Gorila",
  "Camello",
  "Jaguar",
  "Puma",
];

let profesiones = [
  "Medico",
  "Ingeniero",
  "Profesor",
  "Policia",
  "Bombero",
  "Cientifico",
  "Arquitecto",
  "Programador",
  "Disenador",
  "Artista",
  "Periodista",
  "Astronauta",
  "Chef",
  "Abogado",
  "Enfermero",
  "Electricista",
  "Carpintero",
  "Plomero",
  "Piloto",
  "Farmaceutico",
  "Fotografo",
  "Psicologo",
  "Contador",
  "Actor",
];

let colores = [
  "Rojo",
  "Azul",
  "Verde",
  "Amarillo",
  "Naranja",
  "Morado",
  "Rosa",
  "Blanco",
  "Negro",
  "Gris",
  "Café",
  "Celeste",
  "Turquesa",
  "Marrón",
  "Beige",
  "Ocre",
  "Cian",
  "Lila",
  "Violeta",
  "Salmon",
  "Marfil",
  "Turmalina",
  "Aqua",
  "Malva",
  "Caoba",
];

let deportes = [
  "Futbol",
  "Baloncesto",
  "Beisbol",
  "Tenis",
  "Atletismo",
  "Natacion",
  "Ciclismo",
  "Voleibol",
  "Golf",
  "Hockey",
  "Rugby",
  "Boxeo",
  "Esgrima",
  "Karate",
  "Surf",
  "Patinaje",
  "Automovilismo",
  "Ajedrez",
  "Escalada",
  "Pesca",
  "Softbol",
  "Triatlon",
  "Equitacion",
  "Canotaje",
  "Esqui",
];

let dragonBall = [
  "Goku",
  "Vegeta",
  "Piccolo",
  "Gohan",
  "Krillin",
  "Bulma",
  "Trunks",
  "Goten",
  "Freezer",
  "Cell",
  "Buu",
  "Bills",
  "Whis",
  "Tenshinhan",
  "Chaos",
  "Yamcha",
  "Chiaotzu",
  "Raditz",
  "Nappa",
  "Pan",
  "Bardock",
  "Broly",
  "Videl",
  "Dende",
  "Satan",
];

let naruto = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Kakashi",
  "Hinata",
  "Shikamaru",
  "Gaara",
  "Orochimaru",
  "Jiraiya",
  "Tsunade",
  "Itachi",
  "Kiba",
  "Neji",
  "RockLee",
  "Ino",
  "Choji",
  "Deidara",
  "Sai",
  "Temari",
  "Kankuro",
  "Madara",
  "Hashirama",
  "Minato",
  "Tobirama",
];

let paises = [
  "Croacia",
  "Canada",
  "China",
  "Japon",
  "Brasil",
  "Rusia",
  "India",
  "Sudafrica",
  "Italia",
  "Alemania",
  "Australia",
  "Francia",
  "Argentina",
  "Mexico",
  "Egipto",
  "Tailandia",
  "Peru",
  "EmiratosArabes",
  "Singapur",
  "CoreaDelSur",
  "Espana",
  "Portugal",
  "Grecia",
  "Noruega",
  "Suecia",
];

let planetas = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Jupiter",
  "Saturno",
  "Urano",
  "Neptuno",
];

let escuela = [
  "Lapiz",
  "Cuaderno",
  "Boligrafo",
  "Regla",
  "Tijeras",
  "Goma",
  "Mochila",
  "Libro",
  "Calculadora",
  "Pegamento",
  "Estuche",
  "Papel",
  "Marcadores",
  "Pizarra",
  "Compas",
  "Pincel",
  "Diccionario",
  "Celo",
  "Libro",
  "Carpeta",
  "Rotuladores",
  "Sacapuntas",
  "Agenda",
  "Mapa",
];

let vehiculos = [
  "Coche",
  "Camioneta",
  "Motocicleta",
  "Bicicleta",
  "Camion",
  "Avion",
  "Barco",
  "Helicoptero",
  "Tren",
  "Tractor",
  "Scooter",
  "Submarino",
  "Ambulancia",
  "Furgoneta",
  "Autobus",
  "Trineo",
  "Patines",
  "Triciclo",
  "Cohete",
  "Carroza",
  "Monopatin",
  "Canoa",
  "Carretilla",
  "Jet",
];

let temaAleatorio = animales.concat(colores,profesiones,colores,deportes,paises,planetas,escuela,dragonBall,naruto);



let arraySeleccionado = animales;
let randomP = palabraAleatoria(arraySeleccionado);
console.log(randomP);

let palabraMinus = randomP;
let palabra = palabraMinus.toLocaleUpperCase();
let longitudPalabra = palabra.length;

let copiaPalabra = new Array(longitudPalabra);
let copiaPalabraString = copiaPalabra.toString;

let zonaAbc = document.getElementById("zonaAbc");
let contenedorBotones = document.getElementById("botonesAbecedario");

let vidas = 5;
let vidaReiniciar = vidas;
let numVida = document.getElementById("numVida");

// valor de vidas inicial
contadorVidas(vidas);

// reset
let reset = document.getElementById("reset");

// home
let home = document.getElementById("home");
let background = document.getElementById("background");

let btnJug1 = document.getElementById("btnJug1");

let tituloModal = document.getElementById("tituloModal");
let zonaSeleccionModo = document.getElementById("zonaSeleccionModo");
let zonaSeleccionTema = document.getElementById("zonaSeleccionTema");

// Listeners
document.addEventListener("DOMContentLoaded", start());
reset.addEventListener("click", reiniciar);
home.addEventListener("click", modalHome);
btnJug1.addEventListener("click", Jugador1);

// modal Home
function modalHome() {
  background.style.display = "flex";
}
function Jugador1() {
  zonaSeleccionModo.style.display = "none";
  zonaSeleccionTema.style.display = "flex";
  tituloModal.textContent = "Selecciona un tema";
}

let botonesTema = document.querySelectorAll(".btnTema");

botonesTema.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let valorBtn = boton.value;
    console.log(valorBtn)
  });
});

// contador vidas
function contadorVidas(vida) {
  if (vida > 0) {
    if (vida == 9) {
      numVida.textContent = "counter_9";
    } else if (vida == 8) {
      numVida.textContent = "counter_8";
    } else if (vida == 7) {
      numVida.textContent = "counter_7";
    } else if (vida == 6) {
      numVida.textContent = "counter_6";
    } else if (vida == 5) {
      numVida.textContent = "counter_5";
    } else if (vida == 4) {
      numVida.textContent = "counter_4";
    } else if (vida == 3) {
      numVida.textContent = "counter_3";
    } else if (vida == 2) {
      numVida.textContent = "counter_2";
    } else if (vida == 1) {
      numVida.textContent = "counter_1";
    } else if (vida == 0) {
      numVida.textContent = "counter_0";
    }
  } else {
    reset.textContent = "restart_alt";
  }
}

function reiniciar() {
  vidas = vidaReiniciar;
  contadorVidas(vidas);
  contenedorBotones.innerHTML = "";

  randomP = palabraAleatoria(arraySeleccionado);
  console.log(randomP);

  palabraMinus = randomP;
  palabra = palabraMinus.toLocaleUpperCase();
  longitudPalabra = palabra.length;

  copiaPalabra = new Array(longitudPalabra);
  copiaPalabraString = copiaPalabra.toString;
  reset.textContent = "";

  buscada();
  start();
}

// botones abecedario
function start() {
  rellenaArray(0, "*");
  buscada();
  // Obtener el contenedor donde se agregarán los botones
  // var contenedorBotones = document.getElementById("botonesAbecedario");
  // Crear un array con las letras del abecedario
  var letrasAbecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Iterar sobre el array y crear un botón para cada letra
  letrasAbecedario.forEach(function (letra) {
    var btnLetra = document.createElement("button");
    btnLetra.classList.add("btnLetra");
    btnLetra.textContent = letra;

    btnLetra.addEventListener("click", function () {
      validarLetraIntroducida(letra);
      btnLetra.classList.add("btnLetraHide");
      btnLetra.classList.remove("btnLetra");
    });
    contenedorBotones.appendChild(btnLetra);
  });
}

// genera la palabra a buscar
function buscada() {
  let contenedorPalabraBuscada = document.getElementById(
    "contenedorPalabraBuscada"
  );
  contenedorPalabraBuscada.innerHTML = "";

  copiaPalabra.forEach(function (valor) {
    let btnBuscada = document.createElement("p");
    btnBuscada.classList.add("btnBuscada");

    btnBuscada.textContent = valor;

    contenedorPalabraBuscada.appendChild(btnBuscada);
  });
  //
}

// Cambio de estilo si la palabra es correcta
function cambioAcierto() {
  let palabraOk = document.querySelectorAll(".btnBuscada");

  palabraOk.forEach(function (element) {
    element.classList.add("palabraEncontrada");
    element.classList.remove("btnBuscada");
  });
}

// Cambio de estilo si la palabra es incorrecta
function cambioError() {
  let palabraOk = document.querySelectorAll(".btnBuscada");

  // zona palabra
  palabraOk.forEach(function (element) {
    element.classList.add("palabraError");
    element.classList.remove("btnBuscada");
  });
  // zona abecedario
  let btnLetra = document.querySelectorAll(".btnLetra");
  btnLetra.forEach(function (element) {
    element.classList.add("btnLetraHide");
    element.classList.remove("btnLetra");
  });
}

// valida la existencia de la letra
function validarLetraIntroducida(letra) {
  let intro = letra;
  let check = false;

  for (let i = 0; i < palabra.length; i++) {
    const element = palabra[i];

    if (element == intro) {
      rellenaArray(i, element);
      check = true;
      buscada();
    }
    if (palabra == copiaPalabra.join("")) {
      console.log("has Acertado");
      cambioAcierto();
      reset.textContent = "restart_alt";
      break;
    }
  }

  if (!check) vidas--;
  console.log(vidas);
  contadorVidas(vidas);

  if (vidas < 1) {
    cambioError();
    numVida.textContent = "counter_0";
    // alert("loser");
  }
}

// Rellena el array con el caracter correspondiente
function rellenaArray(index, element) {
  copiaPalabra[index] = element;

  for (let i = 0; i < copiaPalabra.length; i++) {
    if (copiaPalabra[i] == null) {
      copiaPalabra[i] = "*";
    }
  }
}

function palabraAleatoria(array) {
  let indice = Math.floor(Math.random() * array.length);
  return array[indice];
}


