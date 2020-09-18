
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite (50,350,10,10); 
 monkey.addAnimation("monkey", monkey_running);
 monkey.scale = 0.1 
  
 FoodGroup = new Group();
 obstacleGroup = new Group();
  
 ground = createSprite(400,370,800,10); 
}

function draw() {
background("lightblue");
  
stroke("black");
textSize(20);
fill ("black");
survivalTime = Math.ceil(frameCount/frameRate());
text ("survivalTime:"+survivalTime,100,50);  
 
if (keyDown("space")){
  monkey.velocityY = -25;    
}
 
  
 ground.velocityX = -5;
 ground.x = ground.width/2;
  
 monkey.velocityY = monkey.velocityY + 1.8;
  
 monkey.collide(ground);
  
 if (obstacleGroup.isTouching(monkey)){
 obstacleGroup.setVelocityXEach(0);
 FoodGroup.setVelocityEach(0); 
 ground.velocityX = 0; 
 monkey.velocityX = 0;
 monkey.velocityY = 0;  
 }
 
 spawnBananas();
 spawnObstacles();
 drawSprites();
  
  
  
}

function spawnBananas(){
if (frameCount % 80 === 0){
  banana = createSprite (400,200,20,20);
  banana.addImage("banana",bananaImage);
  banana.y = Math.round(random(120,200));
  banana.velocityX = -5;
  banana.scale = 0.1;
  FoodGroup.add(banana);
  FoodGroup.lifetime = 1;
}  
}

function spawnObstacles(){
 if (frameCount % 300 === 0){ 
  obstacle = createSprite(400,350,10,10);
  obstacle.addImage("obstacles",obstacleImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.1;
  obstacleGroup.add(obstacle);
  obstacleGroup.lifetime = 1;
 }
}




