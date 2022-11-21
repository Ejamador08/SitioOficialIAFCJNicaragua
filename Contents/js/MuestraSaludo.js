function mostrarSaludo(){
 
    fecha = new Date(); 
    hora = fecha.getHours();
   
    if(hora >= 0 && hora < 12){
      texto = "Buenos Días";
      imagen = "img/dia.png";
    }
   
    if(hora >= 12 && hora < 18){
      texto = "Buenas Tardes";
      imagen = "img/tarde.png";
    }
   
    if(hora >= 18 && hora < 24){
      texto = "Buenas Noches";
      imagen = "img/noche.png";
    }
   
    document.images["tiempo"].src = imagen;
   
    document.getElementById('txtsaludo').innerHTML = texto;
   
  }