var movingRect,fixedRect;
var box1, box2;

function setup()
 {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(600,200,50,100);
  movingRect.shapeColor="red"

  box1=createSprite(200, 100, 50, 50);
  box1.shapeColor="purple";
  box1.velocityY=2;

  box2=createSprite(200,400,50,100);
  box2.shapeColor="purple";
  box2.velocityY=-2;
}

function draw() 
{
  background(0); 
  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }

  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }

  if(box1.x-box2.x<box2.width/2+box1.width/2&&
    box2.x-box1.x<box2.width/2+box1.width/2){
      box1.velocityX=box1.velocityX*(-1);
      box2.velocityX=box2.velocityX*(-1);
  }
   if(box1.y-box2.y<box2.height/2+box1.height/2&&
    box2.y-box1.y<box2.height/2+box1.height/2){
      box1.velocityY=box1.velocityY*(-1);
      box2.velocityY=box2.velocityY*(-1);
    }
  drawSprites();
}