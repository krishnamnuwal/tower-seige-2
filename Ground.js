class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;
        this.color="yellow"
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        fill(this.color)
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}