function reorganizeString(S) {
  let ocurrenciasPorCaracter = {};
  for (let caracter of S) {
    if (ocurrenciasPorCaracter[caracter] === undefined) {
      ocurrenciasPorCaracter[caracter] = 0;
    }
    ocurrenciasPorCaracter[caracter]++;
    if (ocurrenciasPorCaracter[caracter] > (S.length + 1) / 2) {
      return "";
    }
  }
  let colaPrioridad = [];
  for (let [caracter, ocurrencias] of Object.entries(ocurrenciasPorCaracter)) {
    colaPrioridad.push([-ocurrencias, caracter]);
  }
  colaPrioridad.sort((a, b) => a[0] - b[0]);

  let stringOrdenada = [];
  while (colaPrioridad.length >= 2) {
    let [ocurrencia1, caracter1] = colaPrioridad.shift();
    let [ocurrencia2, caracter2] = colaPrioridad.shift();
    stringOrdenada.push(caracter1);
    stringOrdenada.push(caracter2);
    if (ocurrencia1 + 1) {
      colaPrioridad.push([ocurrencia1 + 1, caracter1]);
    }
    if (ocurrencia2 + 1) {
      colaPrioridad.push([ocurrencia2 + 1, caracter2]);
    }
    colaPrioridad.sort((a, b) => a[0] - b[0]);
  }

  if (colaPrioridad.length > 0) {
    return stringOrdenada.join('') + colaPrioridad[0][1];
  }
  return stringOrdenada.join('');
}

console.log(reorganizeString('aacb'))