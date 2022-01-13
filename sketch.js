var jaxon, jaxon_running
var path, pathImg
var coin, bomb, energyDrink, coinImg, bombImg, energyDrinkImg




function preload(){
jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png")
pathImg = loadImage("path.png")
bombImg = loadImage("bomb.png")
coinImg = loadImage("coin.png")
energyDrinkImg = loadImage("energyDrink.png")
}



function setup(){
  createCanvas(400,400)
  bomb=createSprite(300,200,20,20)
  coin=createSprite(174,98,20,20)
  energyDrink=createSprite(75,20,20,20)
  path=createSprite(200,200,20,20);
  

  jaxon=createSprite(200,350,20,20)
  
  path.addImage("pathrunner",pathImg);
  jaxon.addAnimation("running",jaxon_running)
  bomb.addImage("bombexplosion",bombImg)
  coin.addImage("coincollection",coinImg)
  energyDrink.addImage("energyDrinking",energyDrinkImg)
}








function draw() {
drawSprites();

jaxon.scale = 0.05
path.velocityY = 4
  path.scale = 1.2

if(path.y > 200){
  path.y = 200;
}




  path.velocityY = 6;
  if(keyDown("a")){
    jaxon.velocityX = -2
  }



  if(keyDown("d")){
    jaxon.velocityX = 2
  }




}




