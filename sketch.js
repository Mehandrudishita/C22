const Engine = Matter.Engine; //run engine
const World = Matter.World; // create physical world inside which objects will be present
const Bodies = Matter.Bodies;//create physical objects which inhabits physical world
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var option = {isStatic:true};
  object = Bodies.rectangle(200,350,400,10,option);
  World.add(world,object);
  console.log(object);

  object1 = Bodies.rectangle(100,200,40,40);
  World.add(world,object1);
  
  object2 = Bodies.rectangle(130,150,40,40);
  World.add(world,object2);

  circle = Bodies.circle(200,100,20,{restitution:1.0}); //JSON javascript object notation (Datatype)
  World.add(world,circle);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,400,10);
  rect(object1.position.x , object1.position.y,40,40);
  rect(object2.position.x,object2.position.y,40,40);
  ellipseMode(RADIUS);
  ellipse(circle.position.x,circle.position.y,20,20);
}