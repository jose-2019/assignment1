class Glass{

constructor(x,y,width,height){

var options={

    isStatic:true,
    restitutuion:0.2,
    friction:10,
    density:10

}

this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height);
this.image=loadImage("g.png")
World.add(world,this.body);

}

display(){
  
        var angle=this.body.angle;
        push();
        rectMode(CENTER);
        rotate(angle);
        translate(this.body.position.x,this.body.position.y);
        
        imageMode(CENTER);
        image(this.image,0,0,70,70)
        pop();




}

}