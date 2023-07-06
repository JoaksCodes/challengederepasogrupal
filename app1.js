let cadena = prompt("Ingresa el texto:");
let cadenaConGuiones = "";

for (let i = 0; i < cadena.length; i++) {
  cadenaConGuiones += cadena[i];
  if (i !== cadena.length - 1) {
    cadenaConGuiones += "-";
  }
}

console.log("El texto con guiones quedaria:", cadenaConGuiones);


