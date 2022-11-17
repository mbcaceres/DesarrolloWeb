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


function Logo( nombre, empleados, manual) 
{
    this.nombre = nombre;
    this.empleados = empleados;
    this.manual = manual; 
}
//cotizarLogo
Logo.prototype.cotizarLogo = function () {
    /*
        1 = Ya está decidido 1.05
        2 = Quiero crear nombre también 1.60
    */ 

    let cantidad;
    const base = 2000;

    switch (this.nombre) {
        case '1':
            cantidad = base * 1.05;
            break;
        case '2':
            cantidad = base * 1.56;
            break;} }

    //Empleados

    const empleados = {"De 1 a 30","De 30 a 100","Más de 100"};
    console.log (empleados)


// Manual de Marca

   if (this.tipo === 'Sin manual') {
       cantidad *= 1.30;
   } else {
       cantidad *= 1.50;
   }
    return cantidad; }


/* DOM */

const cotizador=document.getElementById ('cotizador');
console.log(cotizador);
for (const c of cotizador) {
    console.log(c);
}

var miBoton = document.getElementById('botonCotizador');
miBoton.addEventListener('click', function() {
    alert('Has hecho clic!!')
  })