let conetendores = document.querySelectorAll(".inactivo");

conetendores.forEach((contenedor) => {
  contenedor.addEventListener("click", function () {
    if (this.classList.contains("inactivo")) {
      this.classList.remove("inactivo");
      this.classList.add("activo");
      eliminarElemento(this);
      crearElemento(this);
    } else if (this.classList.contains("activo")) {
      this.classList.remove("activo");
      this.classList.add("inactivo");
      eliminarElemento(this);
      valorInicial(this);
    }
  });
});

function eliminarElemento(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}

function crearElemento(element) {
  const parrafo = document.createElement("p");
  parrafo.textContent = "Sorpresa";
  element.appendChild(parrafo);

  const imagen = document.createElement("img");
  imagen.src = "../media/animal1.jpg";
  element.appendChild(imagen);
}

function valorInicial(element) {
  const parrafo = document.createElement("p");
  parrafo.textContent = "Click";
  element.appendChild(parrafo);
}
