let animal;
animal = document.getElementById("listaAnimales");

let boton;
boton= document.getElementById("boton");
boton.addEventListener("click", cambiarAnimal);

let imagen;
imagen= document.getElementById("foto");

let mensaje;
mensaje= document.getElementById("parrafo");

let audio;
audio= document.getElementById('audio');


function cambiarAnimal(){
 if(animal[0].selected == true){
    imagen.src = "Imagen/perro.jpg";
    mensaje.innerText = 'Hola soy un perro inteligente y quisiera ser tu mascota'
    audio.src = "Audio/perro.mp3"
 }
 if(animal[1].selected == true){
    imagen.src = "Imagen/gato.jpg";
    mensaje.innerText = 'Saludos soy el gato mas valiente de esta tierra'
    audio.src = "Audio/gato.mp3"
 }
 if(animal[2].selected == true){
    imagen.src = "Imagen/mono.jpg";
    mensaje.innerText = 'Hello me llamo Larry y hablo varios idiomas'
    audio.src = "Audio/mono.mp3"
 }
 if(animal[3].selected == true){
   imagen.src = "Imagen/grillo.jpg";
   mensaje.innerText = 'Hola soy Pepe Grillo y me encanta cantar'
   audio.src = "Audio/grillo.mp3"
}
if(animal[4].selected == true){
   imagen.src = "Imagen/vaca.jpg";
   mensaje.innerText = 'Me llamo Mumu y soy la vaca lechera mas famosa del mundo'
   audio.src = "Audio/vaca.mp3"
}
if(animal[5].selected == true){
   imagen.src = "Imagen/elefante.jpg";
   mensaje.innerText = 'Me llaman Tompita y soy un elefante muy tierno'
   audio.src = "Audio/elefante.mp3"
}
}
