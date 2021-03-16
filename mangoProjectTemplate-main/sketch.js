
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree,treeImg, stone,stoneImg,ground, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	treeImg = loadImge("images/tree.png");
  }

function setup() {
	createCanvas(1000,600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(600,200,30);
	mango2 = new mango(850,325,30);
	mango3 = new mango(670,260,30);
	mango4 = new mango(730,320,30);
	mango5 = new mango(700,250,30);
	mango6 = new mango(825,170,30);
	mango7 = new mango(840,260,30);
	mango8 = new mango(940,220,30); 

	tree=new Tree(1050,580);
    tree.addImage(treeImg);
	tree.scale = 0.2;

	boy = createSprite(150,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	ground=new Ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  rectMode(CENTER);
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  drawSprites();

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  ground.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY});
}

function mouseReleased(){
	attach.fly(); 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x : 100, y : 400});
		attach.Launch(stone.body);
	} 
}