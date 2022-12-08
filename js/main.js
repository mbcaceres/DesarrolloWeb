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
            cantidad = base * 1.60;
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
    return cantidad; 
}


//HTML
function Interfaz(){}

//Mensaje en HTml
Interfaz.prototype.mostarMensaje = function(mensaje, tipo) {
  const div = document.createElement("div");

  if (tipo === 'error') {
    div.classList.add('mensaje', 'error');
  } else {
    div.classList.add("mensaje", "correcto");
  }

  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector(".form-group"));

  setTimeout(function() {
      document.querySelector('.mensaje').remove();
  }, 2000);
};

//imprime resultado de cotización
Interfaz.prototype.mostrarResultado = function (Logo, total) {
    const resultado = document.getElementById('resultado');
    let marca;

    switch (logo.nombre) {
        case '1':
            nombre = 'Ya está decidido';            
            break;
        case '2':
            nombre = 'Quiero crearlo!';
            break;
    }

    //crear un div
    const div = document.createElement('div');
    //insertar la información
    div.innerHTML = `
       <p class="header">Tu resumen:</p>
       <p> Nombre ${Logo.nombre}</p>
       <p> Cantidad de Empleados ${Logo.empleados}</p>
       <p> Manual de Marca ${Logo.manual}</p>
       <p>Total: $ ${total}</p>   
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    
    setTimeout(function(){
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 500);   
    
}

//capturar datops del formulario
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //leer nombre
    const nombre = document.getElementById('nombre');
    const nombreSeleccionado = nombre.options[marca.selectedIndex].value;

    //leer empleados
    const empleados = document.getElementById("empleados");
    const empleadosSeleccionado = empleados.options[anio.selectedIndex].value; 

    //leer manual
    const manual = document.querySelector('input[name="tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();
    //revisamos que los campos no estén vacíos

    if (nombreSeleccionado === '' || empleadosSeleccionado === '' || tipo === '') {
        //interfaz imprimiendo error
        interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const Logo = new Logo(nombreSeleccionado, empleadosSeleccionado, manual);
        //Cotizar el logo
        const cantidad = logo.cotizarLogo(Logo);
        //mostrar resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');

    }

});



for (let i = max; i > min; i--) {
   let option = document.createElement('option');
   option.value = i;
   option.innerHTML = i;
   selectAnios.appendChild(option);
    
}

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

