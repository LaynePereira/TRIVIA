//arrays peguntas games
var gamesPerguntas = ["Qual o Nome do protagonista do Game Mário Kart?","Qual o Jogo que te permite simular a vida real?","Qual Jogo te permite capturar animais estranhos, através de realidade aumentada?"];

//resposta opções games
var gamesRespostaA = ["A) Donkey kong","A) Sin City","A) Donkey kong"];
var gamesRespostaB = ["B) Mario Broz","B) GTA","B) Duke Nukem"];
var gamesRespostaC = ["C) João e o Pé de Feijão","C) The Sims","C) Dota"];
var gamesRespostaD = ["D) Shun Lee","D) Pokemón","D) Pokemón"];

//respostas corretas games
var gamesCorretas = ["B","C","D"];


//variaveis das divs
var divOla = document.getElementById("ola");
var respostas = document.getElementById("resposta");
var button = document.getElementById("button");
var final = document.getElementById("final");
var buttonFinal = document.getElementById("buttonFinal");

//prompt nome
var name = prompt ("Qual seu nome?");
var errado = 0;
var certo = 0;

button.style.visibility = "visible";
divOla.innerHTML = "<p> Olá, " + name + "!! <br><br> Esta preparada? <br></p>";


function temaUm(){
  button.style.display = "none";
  
  // um For utilizado para simplificar o codigo e interagir com as arrays
  for (var i = 0; i < 3; i++){
    var pergunta = prompt (gamesPerguntas[i] + "\n" + gamesRespostaA[i] + "\n" + gamesRespostaB[i] + "\n" + gamesRespostaC[i] + "\n" + gamesRespostaD[i]);
    
    if (pergunta.toUpperCase() == gamesCorretas[i]){
      certo++;
    }else{
      errado++;
    }
    
    console.log("certo = " + certo + " errado = "+ errado);
  }
  
  
  divOla.style.display = "none";
  
  resposta.innerHTML = "<h2> Respostas Corretas </h2><br>" + gamesPerguntas[0] + "<br>" + gamesRespostaB[0] + "<br><br>" +
  gamesPerguntas[1] + "<br>" + gamesRespostaC[1] + "<br><br>" +
  gamesPerguntas[2] + "<br>" + gamesRespostaD[2] + "<br><br>";
  resposta.style.visibility = "visible";
  
  if (certo == 3){
    final.innerHTML = "You rocks! Agora chame uma amiguinha pra jogar também :)";
  }else{
    final.innerHTML = "Você acertou " + certo + "/3"
  }
  
  final.style.visibility = "visible";
  buttonFinal.style.visibility = "visible";
  errado = 0;
  certo = 0;
}


//arrays peguntas filmes
var filmesPerguntas = ["Qual o Nome do filme em que o Leonardo Di Caprio morre afogado?","Qual filme indicou Lady Gaga como melhor atriz no Globo de Ouro em 2018?","Qual Filme naufraga duas crianças?"];

//resposta opções filmes
var filmesRespostaA = ["A) A Praia","A) Romeu e Julieta","A) Náufrago"];
var filmesRespostaB = ["B) O Aviador","B) Nasce Uma Estrela","B) A Ilha"];
var filmesRespostaC = ["C) Titanic","C) American Horror History","C) A Lagoa Azul"];
var filmesRespostaD = ["D) Nenhuma das Anteriores","D) Bohemian Rhapsody","D) Os Batutinhas"];

//respostas corretas filmes
var filmesCorretas = ["D","B","C"];



function temaDois(){
  
  button.style.display = "none";
  
  for (var i = 0; i < 3; i++){
    var pergunta = prompt (filmesPerguntas[i] + "\n" + filmesRespostaA[i] + "\n" + filmesRespostaB[i] + "\n" + filmesRespostaC[i] + "\n" + filmesRespostaD[i]);
    
    if (pergunta.toUpperCase() == filmesCorretas[i]){
      certo++;
    }else{
      errado++;
    }
    
    console.log("certo = " + certo + " errado = "+ errado);
  }
  
  
  divOla.style.display = "none";
  
  resposta.innerHTML = "<h2> Respostas Corretas </h2><br>" + filmesPerguntas[0] + "<br>" + filmesRespostaD[0] + "<br><br>" +
  filmesPerguntas[1] + "<br>" + filmesRespostaB[1] + "<br><br>" +
  filmesPerguntas[2] + "<br>" + filmesRespostaC[2] + "<br><br>";
  resposta.style.visibility = "visible";
  
  if (certo == 3){
    final.innerHTML = "Arrasou! Partiu Netflix pra saber mais ainda :P";
  }else{
    final.innerHTML = "Você acertou " + certo + "/3"
  }
  
  final.style.visibility = "visible";
  buttonFinal.style.visibility = "visible";
  errado = 0;
  certo = 0;
}



function return1(){
  divOla.style.display = "initial";
  button.style.display = "initial";
  final.style.visibility = "hidden";
  buttonFinal.style.visibility = "hidden";
  resposta.style.visibility = "hidden";
}

function return2(){
  final.style.visibility = "hidden";
  buttonFinal.style.visibility = "hidden";
  resposta.style.visibility = "hidden";
  var name = prompt ("Qual seu nome?");
  
  button.style.visibility = "visible";
  divOla.innerHTML = "<p> Olá, " + name + "!! <br> Esta preparada? <br></p>";
  
  divOla.style.display = "initial";
  button.style.display = "initial";
}
