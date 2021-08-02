
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}
var ball1,ball2,ball3,ball4,ball5,ball6,chain1,chain2,chain3,chain4,chain5,chain6,panel;
function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1=new Ball(300,400,80);
ball2=new Ball(480,400,80);
ball3=new Ball(560,400,80);
ball4= new Ball(640,400,80)
ball5=new Ball(720,400,80);
ball6=new Ball(740,400,80);
chain1=new Chain(ball1.body,{ x:300,y:80})
chain2=new Chain(ball2.body,{x:380,y:80})
chain3=new Chain (ball3.body,{x:460,y:80})
chain4=new Chain(ball4.body,{x:540,y:80});
chain5=new Chain(ball5.body,{x:620,y:80});
chain6=new Chain(ball6.body,{x:700,y:80});
panel=new Panel(480,100,500,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(85, 148, 250));
  text(mouseX+","+mouseY,30,45)
 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  panel.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();

  drawSprites();
 
}



