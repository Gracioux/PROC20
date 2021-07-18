
var bg;
var sleep;
var brush
var gym
var eat
var drink
var move
var astronaut


function preload(){
  bg= loadImage("iss.png")
  sleep= loadAnimation("sleep.png")
  brush= loadAnimation("brush.png")
  gym = loadAnimation("gym1.png","gym2.png")
  eat =loadAnimation("eat2.png","eat1.png")
  drink =loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png","move1.png")
  bath =loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(800,400)

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("Brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

    
  if (keyDown("m")) {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 0;
    astronaut.velocityY = 10;
    
  }

  createEdgeSprites();
  astronaut.bounceOff(edges);

  drawSprites();
}