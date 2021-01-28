class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{restitution:0.8,friction:1.0,density:20});
        this.width=width;
        this.height=height;
        this.visiblity=255;
       // this.score=0;
        World.add(world,this.body);

    }
   

     


    
    


    display(){
        var pos=this.body.position;
        var ang=this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(ang);
     
      rectMode(CENTER);
      fill("red");
      strokeWeight(4);
      stroke(0);
      rect(0,0,this.width,this.height);
      
      pop();
    
        /*else{
            World.remove(world,this.body);
            push();
            this.visiblity-=2;
            tint(255,this.visiblity);
            pop();
        }*/
    }
}