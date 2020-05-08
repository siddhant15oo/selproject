var door,closed


function preload(){
  closed=loadAnimation("photos/closeddoor.jpg")
}

function setup() {
  createCanvas(800,400);
  door= createSprite(400, 200, 50, 150);
  
}

function draw() {
  background(255,255,255); 
  //image(closed, door.x, door.y);
  door.addAnimation("door",closed) 
  drawSprites();
}