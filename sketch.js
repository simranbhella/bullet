var bullet,wall;
var speed, weight,thickness;
thickness=Math.round(random(22,83));


function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223,321));
  weight=random(30,52);
  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;
  bullet.shapeColor="blue";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
 
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage= 0.5 * weight * speed * speed/(thickness* thickness* thickness)
if(damage>10){
  wall.shapeColor=color("green");
}
if (damage<10){
  wall.shapeColor=color("red");
}
}
  background(255,255,255);  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}