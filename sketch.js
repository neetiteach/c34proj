const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var world,engine;
var grd;
var blk1=[],blk2=[],blk3=[],blk4=[];

var bg,hobj,mobj;
var pnts=0;

function preload() {
//preload the images here
 bg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
   

  grd=new Ground(800,height-10,1000,20);
 
  var w=width/2
 for(var i=0,y=height-35;i<7;i++,y-=60){ 
  blk1[i]=new Box(width/2-220,y,60,60);
   }
 for(var i=0,y=height-35;i<5;i++,y-=60){
   blk2[i]=new Box(width/2-150,y,60,60);
  }  
 for(var i=0,y=height-35;i<8;i++,y-=60){
  blk3[i]=new Box(width/2-80,y,60,60);
  }  
  for(var i=0,y=height-35;i<8;i++,y-=60){
    blk4[i]=new Box(width/2-10,y,60,60);
    }
 hobj=new Hexa();
 mobj=new Monster();

 sling1=new Sling(hobj.body,{x:100,y:10});
 Engine.run(engine);
}

function draw() {
  
  background(bg);

  grd.display();
  
  for(var i=0;i<blk1.length;i++){
    
    blk1[i].display();
   // blk1[i].cscore();
  
  }
  
  for(var i=0;i<blk2.length;i++){
    blk2[i].display();
  
    
  }
  
  for(var i=0;i<blk3.length;i++){
    blk3[i].display();
   
    
  }
  for(var i=0;i<blk4.length;i++){
    blk4[i].display();
  
    
  }
   
   //blk4.cscore();
   hobj.display();
   sling1.display();
   mobj.display();

}

function mouseDragged(){

  
  Matter.Body.setPosition(hobj.body,{x:mouseX,y:mouseY});
  
}

