function cargarUsuario3() {
    const url = "https://jsonplaceholder.typicode.com/users/10";
    fetch(url)
        .then(r => r.json())
        .then(d => {
            console.log("Ejercicio 3");
            console.log(d.name);
            console.log(d.username);
            console.log(d.email);
        });
}

async function cargarUsuario4() {
    const url = "https://jsonplaceholder.typicode.com/users/10";
    const r = await fetch(url);
    const d = await r.json();
    console.log("Ejercicio 4");
    console.log(d.name);
    console.log(d.username);
    console.log(d.email);
}

function mostrarNombres5() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(r => r.json())
        .then(d => {
            console.log("Ejercicio 5");
            d.forEach(u => console.log(u.name));
        });
}

async function mostrarNombres6() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const r = await fetch(url);
    const d = await r.json();
    console.log("Ejercicio 6");
    d.forEach(u => console.log(u.name));
}

function ej3() { cargarUsuario3(); }
function ej4() { cargarUsuario4(); }
function ej5() { mostrarNombres5(); }
function ej6() { mostrarNombres6(); }
