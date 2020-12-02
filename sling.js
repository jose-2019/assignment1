class Slingshot{

constructor(bodyA,pointB){

var options={

    bodyA:bodyA,
    pointB:pointB,

    isStatic:false,
    length:100
}

this.pointB=pointB;
this.pointX=bodyA.x;
this.pointY=bodyA.y-250;
this.sling = Constraint.create(options);
World.add(world,this.sling)

}

fly(){
    this.sling.bodyA = null;
}

attach(object1){

    this.sling.bodyA=object1;
    
    }

display(){


    if(this.sling.bodyA){

        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(3.5);
        stroke("gold");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        
        }

}

}