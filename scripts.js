let palabraMinus = "aba";
let palabra = palabraMinus.toLocaleUpperCase();
let longitudPalabra = palabra.length;

let copiaPalabra = new Array(longitudPalabra);
let copiaPalabraString = copiaPalabra.toString;

// let intro = document.getElementById("btn1").value;

let vidas = 5;

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

function ac(letra) {
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
      alert("has Acertado");
      break;
    }
  }

  if (!check) vidas--;
  console.log(vidas);

  if (vidas < 1) {
    alert("loser");
  }
}

function rellenaArray(index, element) {
  copiaPalabra[index] = element;

  for (let i = 0; i < copiaPalabra.length; i++) {
    if (copiaPalabra[i] == null) {
      copiaPalabra[i] = "*";
    }
  }
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
      ac(letra);
      btnLetra.classList.add("btnLetraHide");
      btnLetra.classList.remove("btnLetra");
    });
    contenedorBotones.appendChild(btnLetra);
  });
});
