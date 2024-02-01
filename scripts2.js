// MODO 1 JUGADOR

let btnJug1 = document.getElementById("btnJug1");

btnJug1.addEventListener("click", jugador1);

function jugador1() {
  let tituloModal = document.getElementById("tituloModal");
  let zonaSeleccionModo = document.getElementById("zonaSeleccionModo");
  let zonaSeleccionTema = document.getElementById("zonaSeleccionTema");

  zonaSeleccionModo.style.display = "none";
  zonaSeleccionTema.style.display = "flex";
  tituloModal.textContent = "Selecciona el número de jugadores";
}

// selecciona un array en base el string determinado por el valor del btn
function seleccionarTema(tema) {
  // Listas de palabras

  let animalesLista = [
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

  let profesionesLista = [
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

  let coloresLista = [
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

  let deportesLista = [
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

  let dragonBallLista = [
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

  let narutoLista = [
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

  let paisesLista = [
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

  let planetasLista = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Neptuno",
  ];

  let escuelaLista = [
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

  let vehiculosLista = [
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

  let aleatorioLista = animalesLista.concat(
    profesionesLista,
    coloresLista,
    coloresLista,
    deportesLista,
    paisesLista,
    planetasLista,
    escuelaLista,
    dragonBallLista,
    narutoLista
  );

  if (tema == "animales") {
    return palabraAleatoria(animalesLista);
  } else if (tema == "profesiones") {
    return palabraAleatoria(profesionesLista);
  } else if (tema == "colores") {
    return palabraAleatoria(coloresLista);
  } else if (tema == "deportes") {
    return palabraAleatoria(deportesLista);
  } else if (tema == "paises") {
    return palabraAleatoria(paisesLista);
  } else if (tema == "planetas") {
    return palabraAleatoria(planetasLista);
  } else if (tema == "escuela") {
    return palabraAleatoria(escuelaLista);
  } else if (tema == "dragonBall") {
    return palabraAleatoria(dragonBallLista);
  } else if (tema == "naruto") {
    return palabraAleatoria(narutoLista);
  } else if (tema == "aleatorio") {
    return palabraAleatoria(aleatorioLista);
  }
}

// indice aleatorio array
function palabraAleatoria(array) {
  let indice = Math.floor(Math.random() * array.length);
  return array[indice];
}

let botonesTema = document.querySelectorAll(".btnTema");
let palabraSeleccionada;
let palabraSeleccionadaGuardada;

botonesTema.forEach(function (botones) {
  botones.addEventListener("click", function () {
    let valorPalabra = botones.value;

    palabraSeleccionada = seleccionarTema(valorPalabra);

    palabraSeleccionadaGuardada = palabraSeleccionada;
    // console.log("palabra" + palabraSeleccionada);

    palabraJuego(palabraSeleccionadaGuardada);
  });
});

// Obtenemos la palabra que se buscará
function palabraJuego(palabra) {
  alert(palabra);
}
