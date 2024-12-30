document.addEventListener('DOMContentLoaded', function(){
 //Seleccionar el contenedor del anuncio y el botón de cierre
 const anuncio = document.getElementById('anuncio');
 const botonCerrar = document.getElementById('cerrar');

 //Verificar si se seleccionaron correctamente 
 if (anuncio && botonCerrar) {
    //agregar el evento click al botón para cerrar el anuncio
        botonCerrar.addEventListener('click', function(){
            anuncio.style.display = "none";
        });
    }else{
    console.error("El anuncio o el boton de cierre no se encontraron");
   }     
 });

