

window.sr = ScrollReveal();
sr.reveal('#fondo',{
duration:8000,
origin: 'rigth',
distance: '100px'
});


function Llorar(){

document.getElementById("img").src="Bobesponjatriste.jfif";

}

function Reir(){

    document.getElementById("img").src="Bobesponjafeliz.jfif";
    
    }

  function Cambiarazul(){                  //se cambia la etiqueta de color
      document.getElementById("fondo").style.
      backgroundColor="Blue";
      document.getElementById("div").style. //solo el div que se escogio
     backgroundColor="Blue";

  }
  
  function Cambiarblanco(){              
    document.getElementById("fondo").style.
    backgroundColor="white";
    document.getElementById("div").style. //solo el div que se escogio
    backgroundColor="white";

}
  
  function Cambiarrosado(){
     document.getElementById("fondo").style.
     backgroundColor="Pink";
     document.getElementById("div").style. //solo el div que se escogio
     backgroundColor="Lightblue";


}


function Agregar(){
    var Lista = document.getElementById("Lista");
    var dato = document.getElementById("dato").value;
    var li = document.createElement("li");
    li.textContent=dato;
    Lista.appendChild(li);
    document.getElementById("dato").value="";
}

function Eliminar(){

    var Lista = document.getElementById("Lista");
    Lista.removeChild(Lista.lastElementChild);

}