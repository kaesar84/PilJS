let palabraMinus = "hola";
let palabra = palabraMinus.toLocaleUpperCase();
let longitudPalabra = palabra.length;

let copiaPalabra = new Array(longitudPalabra);
let copiaPalabraString = copiaPalabra.toString;

let zonaAbc = document.getElementById("zonaAbc");

let vidas = 1;
let vidaReiniciar = vidas;
let numVida = document.getElementById("numVida");

// valor de vidas inicial
contadorVidas(vidas);

// reset
let reset = document.getElementById("reset");

// contador vidas
function contadorVidas(vida) {
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
    reset.textContent = "restart_alt";
  }
}

function reiniciar() {
  vidas = vidaReiniciar;
}

// botones abecedario
document.addEventListener("DOMContentLoaded", function () {
  rellenaArray(0, "*");
  buscada();
  // Obtener el contenedor donde se agregarán los botones
  var contenedorBotones = document.getElementById("botonesAbecedario");

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
});

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

  palabraOk.forEach(function (element) {
    element.classList.add("palabraError");
    element.classList.remove("btnBuscada");
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
      break;
    }
  }

  if (!check) vidas--;
  console.log(vidas);
  contadorVidas(vidas);

  if (vidas < 1) {
    cambioError();
    zonaAbc.style.display = "none";
    alert("loser");
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
