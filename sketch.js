
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roofob;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;
var bobradius;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofob=new Roof(width/2,height/4,width/2,20);

	bobradius=20;
	startx=width/2;
	starty=height/4+ 400;
	bob1 = new Bob(startx-bobradius*8,starty,bobradius);
	rope1= new Rope(bob1.body,roofob.body,-bobradius*8,0);
	bob2 = new Bob(startx,starty,bobradius);
	rope2= new Rope(bob2.body,roofob.body,0,0);
	bob3 = new Bob(startx+bobradius*4,starty,bobradius);
	rope3= new Rope(bob3.body,roofob.body,bobradius*4,0);
	bob4= new Bob(startx + bobradius*8,starty,bobradius);
	rope4= new Rope(bob4.body,roofob.body,bobradius*8,0);
	bob5 = new Bob(startx-bobradius*4,starty,bobradius);
	rope5= new Rope(bob5.body,roofob.body,-bobradius*4,0);





	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofob.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-60})
	}
}


