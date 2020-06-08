const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,790,480,20);
  div1 = new Division(70,680);
  div2 = new Division(140,680);
  div3 = new Division(210,680);
  div4 = new Division(280,680);
  div5 = new Division(350,680);
  div6 = new Division(420,680);
  div7 = new Division(480,680);
  div8 = new Division(1,680);

  /*for (var k = 0; k <=400; k = k + 80){
    divisions.push(new Divisions(0,200,10,200));
  }*/

}

function draw() {
  background(0);  

  Engine.update(engine);

  ground1.display();

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  drawSprites();
}