class stoneBox{
    constructor(x,y,width,height,angle){
        var option={
            restitution:0.7,
            friction:1.5,
            density:6,
            
        }
       // super(x,y,width,height);
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.image=loadImage("stoneBox.png");
        this.Visibility=255;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<15){
        var pos=this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);

        }else {
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
    }

}