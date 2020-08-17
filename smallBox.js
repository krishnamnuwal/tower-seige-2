class Box1{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
            friction:1.5,
            density:1.5,
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("groundbox.png")
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       //imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)


    }
}