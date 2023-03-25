let sky;
let rocket;
var rocket_img;
var sky_img;


var vx = 0;
var g = 0.05;
var vy = 1;

function preload()
{
  rocket_img = loadImage("Rocket.png");
  sky_img = loadImage("sky.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);


  sky=createSprite(700,500,windowWidth,windowHeight);
  sky.addImage(sky_img);
  
  



  rocket = createSprite(100,600,30,30);
  rocket.addImage(rocket_img);
  rocket.scale = 0.5;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  //image(sky_img,0,0);
  
  sky.velocityY=-0.5;

  //push()
  //fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  //pop();

  //fall down
  
  //sky.position.y=+1
  //rocket.velocityY=-0.4
  rocket.velocityX=+0.1

  if(sky.y<-50){
   sky.y=500;
  }
  
  camera.position.y = rocket.position.y;
  //camera.position.y = sky.position.y;
 
  drawSprites();
}


