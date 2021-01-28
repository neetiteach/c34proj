class Hexa{
    constructor(){
        this.body=Bodies.circle(100,350,80,{density:1,frictionAir:1});
        this.image=loadImage("images/Superhero-01.png");
        this.r=160;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.r+180,this.r);

    }
}
