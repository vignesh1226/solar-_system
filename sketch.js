var sun,p1,p2,p3,p4,p5,p6,p7,p8;
var angle,anglespeed;

function preload(){
  Sun = loadImage("sun.png");
  mercury = loadImage("mercury.png");
  venus = loadImage("venus.png");
  earth = loadImage("earth.png");
  mars = loadImage("mars.png");
  jupiter = loadImage("jupiter.png");
  saturn = loadImage("saturn.png");
  uranus = loadImage("uranus.png");
  neptune = loadImage("neptune.png");
}
function setup() {
  createCanvas(800,400);
  imageMode(CENTER);
  
  p1 = createSprite(380,69,25,25);
  p1.scale = 0.2;
  p1.addImage(mercury);
  p2 = createSprite(450,113,25,25);
  p2.scale = 0.2;
  p2.addImage(venus);
  p3 = createSprite(515,175,25,25);
  p3.scale = 0.2;
  p3.addImage(earth);
  p4 = createSprite(270,213,25,25);
  p4.scale = 0.2;
  p4.addImage(mars);
  p5 = createSprite(634,266,25,25);
  p5.scale = 0.2;
  p5.addImage(jupiter);
  p6 = createSprite(175,299,25,25);
  p6.scale = 0.2;
  p6.addImage(saturn);
  p7 = createSprite(538,343,25,25);
  p7.scale = 0.2;
  p7.addImage(uranus);
  p8 = createSprite(79,375,25,25);
  p8.scale = 0.2;
  p8.addImage(neptune);

  sun = createSprite(400,200,80,80);
  sun.scale = 0.4;
  sun.addImage(Sun);

  angle = PI/2;
  anglespeed = 10;
}

function draw() {
  background(0); 

  angleMode(DEGREES);
  push();
    translate(sun.x, sun.y);
    translate(p1.x, p1.y);
    translate(p2.x, p2.y);
    translate(p3.x, p3.y);
    translate(p4.x, p4.y);
    translate(p5.x, p5.y);
    translate(p6.x, p6.y);
    translate(p7.x, p7.y);
    translate(p8.x, p8.y);
    
    rotate(angle);
  pop();
  angleMode(RADIANS);

  if(World.frameCount%50 === 0){
    sun.width = sun.width+10;
    sun.height = sun.height+10;
    sun.scale = sun.scale+0.1;
    sun.setColliderRadius = sun.setColliderRadius+10;
  }
  
  sun.debug=true;
  sun.setCollider("circle",0,0,75);
 

  p1.debug=true;
  p1.setCollider("circle",0,0,35);
  p2.debug=true;
  p2.setCollider("circle",0,0,35);
  p3.debug=true;
  p3.setCollider("circle",0,0,35);
  p4.debug=true;
  p4.setCollider("circle",0,0,35);
  p5.debug=true;
  p5.setCollider("circle",0,0,35);
  p6.debug=true;
  p6.setCollider("circle",0,0,35);
  p7.debug=true;
  p7.setCollider("circle",0,0,35);
  p8.debug=true;
  p8.setCollider("circle",0,0,35);
  
  if(sun.isTouching(p1)){
    p1.destroy();
  }
  if(sun.isTouching(p2)){
    p2.destroy();
  }
  if(sun.isTouching(p3)){
    p3.destroy();
  }
  if(sun.isTouching(p4)){
    p4.destroy();
  }
  if(sun.isTouching(p5)){
    p5.destroy();
  }
  if(sun.isTouching(p6)){
    p6.destroy();
  }
  if(sun.isTouching(p7)){
    p7.destroy();
  }
  if(sun.isTouching(p8)){
    p8.destroy();
  }

  drawSprites();
}
