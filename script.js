/* EJERCICIO 3 */
function ej3() {
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(r => r.json())
    .then(u => {
      document.getElementById("e3_out").textContent =
        `Nombre: ${u.name}\nUsuario: ${u.username}\nEmail: ${u.email}`;
    });
}

/* EJERCICIO 4 */
async function ej4() {
  const r = await fetch("https://jsonplaceholder.typicode.com/users/10");
  const u = await r.json();
  document.getElementById("e4_out").textContent =
    `Nombre: ${u.name}\nUsuario: ${u.username}\nEmail: ${u.email}`;
}

/* EJERCICIO 5 */
function ej5() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json())
    .then(arr => {
      document.getElementById("e5_out").textContent =
        arr.map(u => u.name).join("\n");
    });
}

/* EJERCICIO 6 */
async function ej6() {
  const r = await fetch("https://jsonplaceholder.typicode.com/users");
  const arr = await r.json();
  document.getElementById("e6_out").textContent =
    arr.map(u => u.name).join("\n");
}

/* EJERCICIO 7 */
function ej7() {
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(r => r.json())
    .then(u => {
      document.getElementById("e7_out").textContent =
        `Nombre: ${u.name}\nEmail: ${u.email}\nCiudad: ${u.address.city}`;
    });
}

/* EJERCICIO 8 */
async function ej8() {
  const r = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const u = await r.json();
  document.getElementById("e8_out").textContent =
    `Nombre: ${u.name}\nEmail: ${u.email}\nCiudad: ${u.address.city}`;
}

/* EJERCICIO 9 */
import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

function ej9() {
  let a = Number(document.getElementById("e9_a").value);
  let b = Number(document.getElementById("e9_b").value);

  let out = "";
  out += `Suma: ${sumar(a, b)}\n`;
  out += `Resta: ${restar(a, b)}\n`;
  out += `Multiplicación: ${multiplicar(a, b)}\n`;

  try {
    out += `División: ${dividir(a, b)}`;
  } catch (e) {
    out += `Error: ${e.message}`;
  }

  document.getElementById("e9_out").textContent = out;
}

function ej10() {
  const out = operacionesDemo();
  document.getElementById("e10_out").textContent = out;
}

window.ej10 = ej10;


/* EJERCICIO 11 */
function ej11() {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  let t = document.getElementById("e11_input").value;
  document.getElementById("e11_out").textContent =
    regex.test(t) ? "Contraseña válida" : "Contraseña inválida";
}

/* EJERCICIO 12 */
function ej12() {
  const regex = /https:\/\/[^\s]+/g;
  let t = document.getElementById("e12_input").value;
  let f = t.match(regex);
  document.getElementById("e12_out").textContent =
    f ? f.join("\n") : "No se encontraron URLs seguras.";
}

/* EJERCICIO 13 */
function ej13() {
  const regex = /<[^>]*>/g;
  let t = document.getElementById("e13_input").value;
  document.getElementById("e13_out").textContent = t.replace(regex, "");
}

/* EJERCICIO 14 */
function ej14() {
  const regex = /[^.!?]+/g;
  let t = document.getElementById("e14_input").value;
  document.getElementById("e14_out").textContent =
    JSON.stringify(t.match(regex));
}

/* EJERCICIO 15 */
function ej15() {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  let t = document.getElementById("e15_input").value;
  document.getElementById("e15_out").textContent =
    regex.test(t) ? "Fecha válida" : "Fecha inválida";
}
window.ej3 = ej3;
window.ej4 = ej4;
window.ej5 = ej5;
window.ej6 = ej6;
window.ej7 = ej7;
window.ej8 = ej8;
window.ej9 = ej9;
window.ej10 = ej10;
window.ej11 = ej11;
window.ej12 = ej12;
window.ej13 = ej13;
window.ej14 = ej14;
window.ej15 = ej15;
