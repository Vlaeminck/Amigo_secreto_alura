let amigos = [];

function primeraLetraMayuscula(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }

    nombre = primeraLetraMayuscula(nombre);
    if (amigos.includes(nombre)) {
        alert("Nombre repetido, por favor ingrese otro nombre");
        return;
    }

    amigos.push(nombre);
    console.log(amigos);
    
    document.getElementById("amigo").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = amigos.join("<br>");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay ningún amigo para sortear, ingrese nombres de sus amigos para jugar");
        return;
    }

    let amigoRandom = Math.floor(Math.random() * amigos.length);
    console.log(amigos[amigoRandom]);
    
    document.getElementById("resultado").innerHTML = "El Amigo Secreto Sorteado es: " + amigos[amigoRandom];
    document.getElementById("listaAmigos").innerHTML = "";
}
