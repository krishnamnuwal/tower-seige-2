class SlingShot{
    constructor(bodyA,pointB){
        var option ={
            bodyA:bodyA,
            pointB:pointB,
            stiffeness:0.04,
            length:20
        }
        this.pointB = pointB
        this.sling = Constraint.create(option);
        this.sling1=loadImage("sling1.png");
        this.sling2=loadImage("sling2.png");
        this.sling3=loadImage("sling3.png");
        World.add(world, this.sling);
       
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,180,730,60,250);
       image(this.sling2,135,720,60,155);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("black");
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 45, pointA.y+10, pointB.x -20, pointB.y);
                line(pointA.x - 45, pointA.y+10, pointB.x + 35, pointB.y +10);
                image(this.sling3,pointA.x -50, pointA.y -5,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
              
            }
           
            
            pop();
        }
    }
    
}
    