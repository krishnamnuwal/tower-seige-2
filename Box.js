class Box  {
    constructor(x,y,width,height,angle){
        var option={
            restitution:0.7,
            friction:1.5,
            density:2.5
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.Visibility=255;
        this.image=loadImage("smallbox.png")
        World.add(world,this.body);
    }
    display(){
      if(this.body.speed<10){
        var pos=this.body.position
       var angle=this.body.angle
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       image(this.image,0,0,this.width,this.height)
       pop();
      }else{
          World.remove(world,this.body);
          push();
          this.Visibility=this.Visibility-5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
      }

    }
}