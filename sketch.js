const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg;
var engine,world;
var stone;
var boy1,boy2,boy1Img,boy2Img;
var apple;
var slingshot;
var ground;
var score = 0;
var gameState = "onSlung";
function preload(){
   backgroundImg = loadImage("background1.jpg");
    boy1Img = loadImage("boy.png");
    boy2Img = loadImage("boy2.png");
}

function setup(){   
    var canvas = createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;
 
    boy1 = createSprite(200,400);
    boy1.addImage(boy1Img);
    boy1.scale = 0.4;
    boy2 = createSprite(600,400);
    boy2.addImage(boy2Img);
    boy2.scale = 0.4;
    ground = new Ground(600,320,200,10);
    ground.visible = false;
    stone = new Stone(140,390,120);
    apple = new Apple(600,300,70);
    slingshot = new Slingshot(stone.body,{x:140,y:400});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    noStroke();
    fill(255);
    textSize(20);
    text("Score "+score,width-100,50);
    stone.display();
    apple.display();
    ground.display();
    slingshot.display();
        drawSprites();
}   

function mouseDragged(){
  if(gameState !== "launched"){
      Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:140,y:400});
        slingshot.attach(stone.body);
    }
}
