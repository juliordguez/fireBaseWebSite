$(document).ready(function() {
  $("#miFormulario").submit(function(event) {
    event.preventDefault(); // Previene la recarga de la página por defecto

    // Obtén los valores del formulario
    const nombre = $("#nombre").val();
    const edad = $("#edad").val();

    // Crea un objeto con los datos del formulario
    const datos = {
      nombre: nombre,
      edad: edad
    };

    // Configura la URL de tu API
    const url = "https://tu-api.com/endpoint";

    // Realiza una solicitud POST a la API utilizando $.ajax()
    $.ajax({
      url: url,
      type: "POST", // Puedes usar "GET", "POST", "PUT", "DELETE" u otros métodos según corresponda
      contentType: "application/json", // Indica que estás enviando datos en formato JSON
      data: JSON.stringify(datos), // Convierte los datos a formato JSON y envíalos en el cuerpo de la solicitud
      success: function(data) {
        console.log("Respuesta de la API:", data); // Hacer algo con la respuesta de la API
      },
      error: function(error) {
        console.error("Error:", error); // Manejar errores de solicitud
      }
    });
  });
});


function initMap(){
    //Coordenadas de tu ubicación o lugar que desees mostrar en el mapa
       var ubicacion = { lat: 20.94873030936614, lng: -101.41615372615954 };
     
       // Crea un nuevo mapa y lo centra en la ubicación especificada
       var miPrimerMapa = new google.maps.Map(document.getElementById('map'), {
           center: ubicacion,
           zoom: 15 // Ajusta el nivel de zoom según tus necesidades
         });
   
        //Crea un marcador en la ubicación especificada
       var marker = new google.maps.Marker(
         {
           position: ubicacion,
           map: miPrimerMapa,
           title: 'Mi Ubicación'
         }
         );
       }
   
       document.addEventListener('DOMContentLoaded',function () {
   
       });

const openModal = document.querySelector('.about_us');

const modal = document.querySelector('.modal');

const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal .addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

