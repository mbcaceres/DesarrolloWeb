let ingreso = alert ("Bienvenidx! Necesitamos algunos datos antes de cotizar");
let nombre = prompt ("Ingresá tu nombre");
let apellido = prompt ("Ahora ingresá tu apellido");

if (nombre !="" && apellido !="") { 
    console.log ('Bienvenidx ' + nombre + "" + apellido);
} else { 
    console.log ('Los campos son obligatorios');
}

let condicion= true
let edad = parseInt(prompt ("Ingresá tu edad"));

while (edad < 18) {
    console.log ("No podes cotizar ahora");
    edad = parseInt(prompt("Ingresá tu edad"));
}
console.log ('Listo!')
