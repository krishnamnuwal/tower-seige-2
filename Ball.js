class Ball {
    constructor(x,y,angle){
        var option={
            restitution:1,
            density:1.8,
            friction:1,
        }
        this.body=Matter.Bodies.circle(x,y,80,option)
        this.radius=100;
        this.color="blue"
        this.image=loadImage("smoke.png")
        this.trajectory=[]
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill(this.color);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,80);
        pop();
     /*   if(this.body.velocity.x>15 && this.body.position.x>200 ){
            var position=[this.body.position.x,this.body.position.y]
            this.trajectory.push(position);

            for(var i=0;i<this.trajectory.length;i++){
            image(this.image,this.trajectory[i][0],this.trajectory[i][1])
            }


        }  */

      
    }
}