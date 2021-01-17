const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var ball;



function setup() {
  createCanvas(400,400);
myEngine=Engine.create();
myWorld=myEngine.world;

var prop={
  isStatic:true
}
ground=Bodies.rectangle(200,390,200,20,prop);
World.add(myWorld,ground);
console.log(ground);
var prop2={
restitution:1.3
}
ball=Bodies.circle(200,100,20,prop2);
World.add(myWorld,ball);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}