function dirigir(){
  var obstaculos = false;
  var velocidade = 0;
  var anguloDirecao = 0;
  var nomeMotorista = "Jó";

  if((velocidade > 100) || obstaculos == true){
    alert("Desacelerar");
  }else{
    alert("Só "+nomeMotorista+" pode guiar esse veiculo!");
  }
}

dirigir();
