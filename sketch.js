const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){

    var canvas = createCanvas(1500,550);
    engine = Engine.create();
    world = engine.world;

    disc=new F(200,200,70);

    ground=new Ground(4080,530,30800,20)

    slingshot=new Slingshot(disc.body,{x:200,y:150});

    glass1=new Glass(915,500,20,60); 

    glass2=new Glass(940,500,20,60);

    glass3=new Glass(966,500,20,60);

    glass4=new Glass(992,500,20,60);

    glass5=new Glass(925,430,20,60);

    glass6=new Glass(951,430,20,60);

    glass7=new Glass(967,430,20,60);

    glass8=new Glass(930,380,20,60);

    glass9=new Glass(957,380,20,60);

    glass10=new Glass(950,320,20,60);

}

function draw(){

background("white");

Engine.update(engine);

disc.display();

slingshot.display();

glass1.display();

glass2.display();

glass3.display();

glass4.display();

glass5.display();

glass6.display();

glass7.display();

glass8.display();

glass9.display();

glass10.display();

}

function mouseDragged(){

    Matter.Body.setPosition(disc.body,{x:mouseX,y:mouseY});
    
}

function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed() {

    if(keyCode === 32){

        slingshot.attach(disc.body);

    }
  }