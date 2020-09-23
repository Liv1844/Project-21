var wall,thickness;
var bullet,speed,weight
var damage

function setup() {
  createCanvas(800,400);
  wall.shapeColor=color(80,8,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/
    (thicknessofwall*thicknessofwall*thicknessofwall);

    if(damage>10){
      wall.shapeColor=color(225,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,225,0);
    }
  }
  hasCollided();
  drawSprites();
}


function hasCollided(){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;

}