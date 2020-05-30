
var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 20, 50);
  bullet.shapeColor=color("white");
  wall = createSprite(1200,200,thickness,height/2);
  wall.width = thickness;
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background("yellow"); 
  
  bullet.collide(wall);

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage>10){
      wall.shapeColor=color("red");
    }

    if (damage<10){
      wall.shapeColor=color("green");
    }


  }
  drawSprites();  
}

function hasCollided(bullet, wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
   return false;
}