class Sling{
    constructor(bodya,pntb){
        var opt={
            bodyA:bodya,
            pointB:pntb,
            stiffness:1.2,
             length:350
        }
    
        this.body=Constraint.create(opt);
         World.add(world,this.body);         
    }

  

    display(){
        if(this.body.bodyA){
        var posa=this.body.bodyA.position;
        
        var posb=this.body.pointB;
        push();
        strokeWeight(0);
        
        line(posa.x,posa.y,posb.x,posb.y);
        pop();
    }
   }
}