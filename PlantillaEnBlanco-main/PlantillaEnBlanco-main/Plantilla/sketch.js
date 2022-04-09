//Variables Globales
var Plataforma
var PlataformaIMG
var Plataforma2
var Plataforma2IMG
var PlataformasGroup
var Fondo
var FondoIMG

function preload(){
  //precargar imagenes y sonidos
  PlataformaIMG = loadImage("./Imagenes/Plataforma 1.png");
  Plataforma2IMG = loadImage("./Imagenes/Plataforma 2.png");
  FondoIMG = loadImage("./Imagenes/Cielo.png");
}

function setup(){
 //Crear Sprites
  createCanvas(1200,1200);
  PlataformasGroup = new Group();
  Fondo = createSprite(300,300);
  Fondo.addImage("Fondo",FondoIMG);
  Fondo.scale = 6;
  Fondo.velocityY = 1;
}

function draw(){
  spawnPlataformas();
 
 
  drawSprites();
}


function spawnPlataformas(){

 if(frameCount%200===0){

  Plataforma = createSprite(100,20);
  Plataforma.addImage("Plataforma",PlataformaIMG);
  Plataforma.scale = 2;
  Plataforma.x = Math.round(random(20,580));
  Plataforma.lifetime = 800
  PlataformasGroup.add(Plataforma);




  
  
  
  
  
  
  //Plataforma2 = createSprite(200,20);
  //Plataforma2.addImage("Plataforma2",Plataforma2IMG);
 }




}