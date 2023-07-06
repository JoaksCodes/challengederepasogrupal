let cadena = prompt("Ingrese un texto:");
let cadenaAlReves = "";

for (let i = cadena.length - 1; i >= 0; i--) {
  cadenaAlReves += cadena[i];
}

console.log("Cadena al revés:", cadenaAlReves);