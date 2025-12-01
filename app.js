import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

export function operacionesDemo() {
  let a = 12;
  let b = 3;

  let resultado = `
Suma: ${sumar(a, b)}
Resta: ${restar(a, b)}
Multiplicación: ${multiplicar(a, b)}
`;

  try {
    resultado += `División: ${dividir(a, b)}`;
  } catch (e) {
    resultado += `Error: ${e.message}`;
  }

  return resultado;
}

window.operacionesDemo = operacionesDemo;
