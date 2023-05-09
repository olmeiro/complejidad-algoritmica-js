//Javascript:
class Nodo {
  constructor(valor, siguiente = null) {
    this.valor = valor;
    this.siguiente = siguiente;
  }
}

function oddEventList(cabeza) {
  if (cabeza == null || cabeza.siguiente == null) {
    return cabeza;
  }
  
  let impar = cabeza;
  let par = cabeza.siguiente;
  let cabezaPar = par;

  while (par != null && par.siguiente != null) {
    impar.siguiente = par.siguiente;
    impar = impar.siguiente;
    par.siguiente = impar.siguiente;
    par = par.siguiente;
  }

  impar.siguiente = cabezaPar;
  return cabeza;
}