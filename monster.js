class Monster{
    constructor(){
        this.body=Bodies.circle(width/2+400,400,150,{density:5,frictionAir:0});
        this.image=loadImage("images/Monster-01.png");
        this.r=300;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.r,this.r);

    }
}
