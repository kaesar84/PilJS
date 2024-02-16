export function calculo_IVA(cantidad) {
  let iva = cantidad * 0.21;
  return iva;
}

export function calculo_IRPF(cantidad) {
  let irpf = cantidad * 0.15;
  return irpf;
}

export function calculo_total(cantidad) {
  let total = cantidad - calculo_IRPF(cantidad) + calculo_IVA(cantidad);
  return total;
}


// puedes hacerlo tambien, se harían con la declaracion las funciones normal
// export{calculo_IVA}
// export{calculo_IRPF as irpf}

// export{
//     calculo_IRPF,
//     calculo_IVA
// }

