class F{

constructor(x,y,r){

var options={

restitution:0.2,
friction:0.1,
density:0.2,
isStatic:false


}

    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,r/2,options);
    this.image=loadImage("flying disc.png");
    World.add(world,this.body);

}

display(){

    var paperpos=this.body.position;
    push();
    rotate(this.body.angle);
    translate(paperpos.x,paperpos.y);
    imageMode(CENTER);
    image(this.image,0,0,70,70)
    pop();

}

}